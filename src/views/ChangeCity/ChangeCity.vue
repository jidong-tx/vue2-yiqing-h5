<template>
  <div class="content">
    <p class="title">切换城市</p>
    <van-index-bar :index-list="indexList">
      <template v-for="(item, key) in citylist">
        <van-index-anchor :index="key" :key="key" />
        <van-cell
          :title="ele.name"
          v-for="ele in item"
          :key="ele.id"
          @click="goBack"
        />
      </template>
    </van-index-bar>
  </div>
</template>

<script>
// 引入api
import api from "../../api/index.js";
export default {
  methods: {
    goBack(e) {
      this.city = e.target.innerText;
      this.$router.go(-1);

      //第一种方法
      // localStorage.setItem("city", e.target.innerText);
      // 第二种方法
      // this.$bus.$emit("city", e.target.innerText); //不能写在这  要写在 销毁之前或者销毁之后中在加载新组件时，在新组件挂载之前会销毁上一个组件，然后再挂载新的组件
    },
  },
  destroyed() {
    this.$bus.$emit("city", this.city + "疫情");
  },
  data() {
    return {
      city: "",
      citylist: {},
      indexList: [],
    };
  },
  created() {
    // 请求数据
    api.getCityName().then((res) => {
      console.log(res.data.result.citylist);
      this.citylist = res.data.result.citylist;
      console.log(this.citylist);
      this.indexList = Object.keys(this.citylist);
    });
  },
};
</script>

<style lang="less" scoped>
.content {
  .title {
    padding: 0.2rem;
    background: #fff;
  }
  background-color: #f5f5f5;
}
</style>