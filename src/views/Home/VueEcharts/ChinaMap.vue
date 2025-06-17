<template>
  <div class="content">
    <div class="title">国内疫情地图</div>

    <div class="tabMap">
      <div class="tab">
        <div
          v-for="(item, index) in arr"
          :key="index"
          :class="{ active: index == num }"
          @click="clickBtn(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="map">
        <!-- 现存确诊地图 -->

        <div class="current" v-show="num == 0">
          <div
            id="nowMain"
            style="width: 7.5rem; height: 8rem; background-color: #f5f5f5"
          ></div>
        </div>

        <!-- 累计确诊地图 -->

        <div class="total" v-show="num == 1">
          <div id="main" style="width: 7.5rem; height: 8rem"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入Echarts
// import echarts from "echarts";
import china from "../../../../node_modules/echarts/map/js/china.js";
import api from "../../../api/index.js";
export default {
  mounted() {
    // 请求地图信息数据;
    api.getMapInfo().then((res) => {
      console.log(res.data.retdata);
      var provinces = res.data.retdata;
      var totalArr = []; //累计
      var curArr = []; //现存
      for (var i = 0; i < provinces.length; i++) {
        var ele = provinces[i];
        var obj = {
          value: ele.confirm,
          name: ele.xArea,
        };
        var curObj = {
          value: ele.curConfirm,
          name: ele.xArea,
        };
        totalArr.push(obj);
        curArr.push(curObj);
      }
      this.$myChart.chinaMap("main", totalArr);
      this.$myChart.chinaMap("nowMain", curArr);
    });
  },
  data() {
    return {
      num: 0,
      arr: ["现存确诊", "累计确诊"],
    };
  },

  methods: {
    //   绘制中国地图的方法
    getChinaMap() {
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          //悬浮弹框
          triggerOn: "click", //提示框触发的条件
          enterable: true, //鼠标是否可进入提示框浮层中，默认为false
          formatter(item) {
            //item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d
            return item.name;
          },
          // formatter:'{a}-{b}'
        },
        visualMap: [
          {
            //映射高亮颜色
            orient: "horizontal", //水平的
            type: "piecewise", //离散
            bottom: 0,
            pieces: [
              // 配置颜色区间
              {
                min: 0,
                max: 0,
                color: "#FFFFFF",
              },
              {
                min: 1,
                max: 100,
                color: "#FDFDCF",
              },
              {
                min: 100,
                max: 1000,
                color: "#FE9E83",
              },
              {
                min: 1000,
                max: 5000,
                color: "#E55A4E",
              },
              {
                min: 5000,
                // max: 10000,
                color: "#4F070D",
              },
            ],
          },
        ],
        series: [
          {
            name: "省",
            type: "map", //地图  bar  line  map
            map: "china", //中国地图 需要引入地图china.js
            roam: false,
            zoom: 1.2,
            aspectScale: 0.75,
            top: 40,
            layoutCenter: ["5%", "5%"],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                },
              },
            },
            itemStyle: {
              normal: {
                areaColor: "rgba(0,255,236,0)",
                borderColor: "rgba(0,0,0,0.2)",
              },
              emphasis: {
                // 选中的区域颜色及阴影效果等
                areaColor: "rgba(255,180,0,0.8)",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
              },
            },
            // data
            data: [
              { name: "内蒙古", value: 200 },
              { name: "北京", value: 800 },
            ],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    clickBtn(index) {
      this.num = index;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  .title {
    height: 0.88rem;
    padding: 0 0.32rem;
    font-size: 0.34rem;
    font-weight: 500;
  }
  .tabMap {
    .tab {
      padding: 0.08rem 0.32rem 0.24rem;
      overflow: hidden;
      div {
        float: left;
        width: 1.28rem;
        height: 0.56rem;
        margin-right: 00.08rem;
        line-height: 00.56rem;
        text-align: center;
        font-size: 0.12rem;
        color: #666;
        background: #f7f7f7;
        border-radius: 0.02rem;
      }
      .active {
        position: relative;
        color: #4169e2;
        background: #f1f5ff;
      }
    }
  }
}
.map {
  .show {
    display: block;
  }
}
.title::before {
  content: "";
  display: inline-block;
  width: 0.08rem;
  height: 0.32rem;
  margin-top: -0.02rem;
  margin-right: 0.16rem;
  background: #4169e2;
}
</style>