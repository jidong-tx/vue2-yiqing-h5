<template>
  <div class="content">
    <!-- 顶部logo -->
    <div>
      <img src="../../assets/images/指南.png" width="100%" alt="" />
    </div>
    <!-- 物资内容 vant-->
    <div class="wraper">
      <van-tabs v-model="active" animated>
        <van-tab v-for="item in arr" :title="item.title" :key="item.title">
          <div class="image">
            <img :src="item.img" alt="" width="100%" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/images/消毒1.png";
import img2 from "../../assets/images/口罩2.png";
import img3 from "../../assets/images/洗手液3.png";
import img4 from "../../assets/images/温度计4.png";
export default {
  data() {
    return {
      active: 0,
      arr: [
        {
          img: img1,
          title: "消毒剂",
        },
        {
          img: img2,
          title: "口罩",
        },
        {
          img: img3,
          title: "洗手液",
        },
        {
          img: img4,
          title: "温度计",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: #3343ff;
  .image {
    margin: 0.2rem;
    border-radius: 0.1rem;
    overflow: hidden;
  }
  /deep/ .van-tabs__nav.van-tabs__nav--line {
    border-radius: 0.1rem;
    margin: 0 0.2rem;
  }
}
</style>