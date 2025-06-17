<template>
  <div class="content">
    <img src="../../assets/images/出行政策.png" width="100%" alt="" />

    <div class="queryCity">
      <!-- 出发城市 -->
      <div>
        <van-field
          v-model="goCity"
          is-link
          readonly
          label="出发的城市"
          placeholder="请选择所在地区"
          @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
          <van-cascader
            v-model="cascaderValue"
            title="请选择所在地区"
            :options="options"
            @close="show = false"
            @finish="onFinish"
          />
        </van-popup>
      </div>
      <!-- 到达城市 -->
      <div>
        <van-field
          v-model="toCity"
          is-link
          readonly
          label="到达的城市"
          placeholder="请选择地区"
          @click="show2 = true"
        />
        <van-popup v-model="show2" round position="bottom">
          <van-cascader
            v-model="cascaderValue2"
            title="请选择地区"
            :options="options"
            @close="show2 = false"
            @finish="toFinish"
          />
        </van-popup>
      </div>
      <div class="btn"></div>

      <van-button type="primary" size="large" @click="search"
        >查询政策</van-button
      >
    </div>

    <div class="fromCity">
      <div class="city">出发城市：{{ from_info.city_name }}</div>
      <div class="container">
        <p>外出政策</p>
        <p>
          {{ from_info.low_in_desc }}
        </p>
      </div>
    </div>
    <div class="fromCity">
      <div class="city">到达城市：{{ to_info.city_name }}</div>
      <div class="container">
        <p>到达政策</p>
        <p>
          {{ to_info.low_in_desc }}
        </p>
      </div>
    </div>
    <div class="toCity"></div>
  </div>
</template>

<script>
import api from "../../api/index.js";
export default {
  data() {
    return {
      from_info: {},
      to_info: {},
      from: "",
      to: "",
      show: false,
      show2: false,
      goCity: "", //出发的值
      toCity: "", //到达的值
      cascaderValue: "",
      cascaderValue2: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  created() {
    //请求数据
    api.getTripInfo().then((res) => {
      console.log("出行政策----", res.data.result);
      // 处理请求的结果，处理成上面options想要的格式的数据
      let arr = res.data.result;
      let options = [];
      arr.forEach((element) => {
        let obj = {};
        obj.text = element.province;
        obj.value = element.province_id;
        var children = [];
        element.citys.forEach((item) => {
          let obj = {};
          obj.text = item.city;
          obj.value = item.city_id;
          children.push(obj);
        });
        obj.children = children;
        options.push(obj);
      });
      console.log(options);
      this.options = options;
    });
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions }) {
      this.from = value;
      this.show = false;
      this.goCity = selectedOptions.map((option) => option.text).join("/");
    },
    toFinish({ value, selectedOptions }) {
      this.to = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join("/");
    },
    // 点击请求数据 查询出行政策
    search() {
      console.log(this.from, this.to);
      api.queryRules(this.from, this.to).then((res) => {
        console.log(res.data);
        this.from_info = res.data.result.from_info;
        this.to_info = res.data.result.to_info;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  padding-bottom: 0.2rem;
  background-color: #f5f5f5;
  position: relative;
  .queryCity {
    position: absolute;
    left: 0;
    top: 2.5rem;
    width: 100%;
  }
  .fromCity {
    .city {
      padding: 0 0.1rem 0 0.24rem;
      background-color: #40cca7;
      border-radius: 0.12rem;
      height: 0.8rem;
      line-height: 0.8rem;
      margin-bottom: 0.2rem;
    }
    margin: 00.2rem;

    padding: 0.2rem 0.2rem 0.2rem 0.4rem;

    border-radius: 0.2rem;
    background-color: #fff;
    .container {
      border-radius: 0.2rem;
      background-color: #f5f5f5;
      padding: 0.1rem;
    }
  }
  .title {
    margin: 0.2rem;
  }
}
.btn {
  margin: 0.1rem;
}
</style>