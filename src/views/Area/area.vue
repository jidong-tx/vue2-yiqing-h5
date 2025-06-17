<template>
  <div class="content">
    <div>
      <img src="../../assets/images/风险区域.png" width="100%" alt="" />
    </div>
    <div class="aiskArea">
      <div class="title">全国风险地区汇总</div>
      <template v-if="high.length > 0">
        <div class="high">
          <p>高风险地区{{ high.length }}个</p>
          <ul v-for="(item, index) in high" :key="index">
            <li>{{ item }}</li>
          </ul>
        </div>
      </template>
      <template v-if="mid.length > 0">
        <div class="mid">
          <p>中风险地区{{ mid.length }}个</p>
          <ul v-for="(item, index) in mid" :key="index">
            <li>{{ item }}</li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import api from "../../api/index.js";
export default {
  data() {
    return {
      high: [], //高风险区
      mid: [], //低风险区
    };
  },
  // 进行网络请求
  created() {
    api.getCovInfo().then((res) => {
      console.log(res.data.newslist[0].riskarea);
      let riskarea = res.data.newslist[0].riskarea;
      this.high = riskarea.high;
      this.mid = riskarea.mid;
    });
  },
};
</script>

<style lang="less" scoped>
.content {
//   position: relative;
  .aiskArea {
    position: relative;

    margin: -3rem 0.25rem 0;
    padding: 0 0.2rem;
    background-color: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    overflow: hidden;
    .title {
      font-size: 0.32rem;
      font-weight: 600;
      border-left: 0.1rem solid rgb(20, 49, 128);
      padding-left: .1rem;
      margin: 0.2rem 0;
    }
    li {
      padding: 0.1rem 0.1rem;
      margin: 0.2rem 0;
      background-color: #f5f5f5;
      border-radius: 0.1rem;
      font-size: 0.26rem;
      font-weight: normal;
    }
    .high,
    .mid {
      font-size: 0.288rem;
      font-weight: 600;
    }
  }
  background-color: #f5f5f5;
}
</style>