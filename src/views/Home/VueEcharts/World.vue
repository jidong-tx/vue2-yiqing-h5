<template>
  <div>
    <div class="title">世界疫情地图</div>
    <!-- 地图容器 -->
    <div id="worldMain" style="width: 7.5rem; height: 7rem"></div>
  </div>
</template>

<script>
import "../../../utils/map.js";
import country from "../../../utils/country.js";
import echarts from "echarts";

export default {
  mounted() {
    this.getWorldMap("worldMain");
  },
  methods: {
    getWorldMap(id) {
      var myChart = echarts.init(document.getElementById(id));
      var option = {
        tooltip: {
          //悬浮弹框
          triggerOn: "click", //提示框触发的条件
          enterable: true, //鼠标是否可进入提示框浮层中，默认为false
          formatter(item) {
            //item=下面serves里面的data里面的每一项 //[{} ] data={} a b c d
            return item.name + "：确诊人数" + item.value;
          },
        },
        visualMap: [
          {
            //映射高亮颜色
            orient: "vertical", //垂直
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
                max: 10000,
                color: "#FDFDCF",
              },
              {
                min: 10000,
                max: 100000,
                color: "#FE9E83",
              },
              {
                min: 100000,
                max: 500000,
                color: "#E55A4E",
              },
              {
                min: 500000,
                // max: 10000,
                color: "#4F070D",
              },
            ],
          },
        ],
        series: [
          {
            name: "国",
            type: "map", //地图  bar  line  map
            map: "world",
            nameMap: country, //自定义地区的名称映射
            roam: false,
            zoom: 1.2,
            aspectScale: 0.75,
            top: 40,
            layoutCenter: ["5%", "5%"],
            label: {
              normal: {
                show: false,
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
            data: [],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang='less' scoped>
.title {
  margin: 0.2rem;
  padding-top: 0.2rem;
  border-top: 1px solid #eee;
  font-size: 0.34rem;
}
.title::before {
  content: "";
  border-left: 0.1rem solid rgb(9, 60, 202);

  margin-right: 0.1rem;
}
#main {
  background: #f5f5f5;
}
</style>