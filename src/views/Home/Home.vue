<template>
  <div class="home">
    <router-link to="/changeCity">
      <button class="changeCity">{{ city }}</button>
    </router-link>
    <img src="../../assets/images/yiqing.png" width="100%" alt="" />
    <CovInfo :covDesc="covDesc" :news="news" />
    <div class="entryItem">
      <ul>
        <li>
          <router-link to="/area">
            <img src="../../assets/images/1.png" alt="" />
            <p>风险地区</p>
          </router-link>
        </li>
        <li>
          <router-link to="/hesuan">
            <img src="../../assets/images/2.png" alt="" />
            <p>核酸检测</p>
          </router-link>
        </li>
        <li>
          <router-link to="/prevention">
            <img src="../../assets/images/3.png" alt="" />
            <p>防疫物资</p>
          </router-link>
        </li>
        <li>
          <router-link to="/trip">
            <img src="../../assets/images/4.png" alt="" />
            <p>出行政策</p>
          </router-link>
        </li>
      </ul>
    </div>
    <CovNumber :covData="covData" />
    <ChinaMap />
    <World />
    <VueSwiper />
  </div>
</template>

<script>
// @ is an alias to /src
import CovInfo from "./CovInfo/CovInfo.vue";
import api from "../../api/index.js";
import CovNumber from "./CovNumber/CovNumber.vue";
import ChinaMap from "./VueEcharts/ChinaMap.vue";
import World from "./VueEcharts/World.vue";
import VueSwiper from "./VueSwipter.vue";
export default {
  name: "Home",
  components: {
    CovInfo,
    CovNumber,
    ChinaMap,
    World,
    VueSwiper,
  },
  data() {
    return {
      covDesc: {},
      news: [],
      covData: {}, //全国数据统计
      city: "切换城市",
    };
  },

  // 组件销毁前需要解绑事件
  beforeDestroy() {
    this.$bus.$off("city");
  },

  // 生命周期函数created
  created() {
    // 第一种方法
    // let city = localStorage.getItem("city");
    // if (city) {
    //   this.city = city + "疫情";
    // }
    // 第二种方法
    this.$bus.$on("city", (res) => {
      this.city = res;
      console.log(res);
    });

    api.getCovInfo().then((res) => {
      var info = res.data.newslist[0].desc;
      this.covDesc = {
        note1: info.note1,
        note2: info.note2,
        note3: info.note3,
        remark1: info.remark1,
        remark2: info.remark2,
        remark3: info.remark3,
      };

      this.news = res.data.newslist[0].news;
      //3. 全国疫情的数据统计信息---
      this.covData = {
        currentConfirmedCount: info.currentConfirmedCount,
        confirmedCount: info.confirmedCount,
        suspectedCount: info.suspectedCount,
        curedCount: info.curedCount,
        deadCount: info.deadCount,
        seriousCount: info.seriousCount,
        suspectedIncr: info.suspectedIncr,
        currentConfirmedIncr: info.currentConfirmedIncr,
        confirmedIncr: info.confirmedIncr,
        curedIncr: info.curedIncr,
        deadIncr: info.deadIncr,
        seriousIncr: info.seriousIncr,
        modifyTime: info.modifyTime,
      };
    });
  },
};
</script>
<style lang="less" scoped>
.entryItem {
  ul {
    display: flex;
    text-align: center;
    padding: 0.32rem 0;
    li {
      flex-grow: 1;
      p {
        color: #333;
      }
    }
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
.home {
  position: relative;
}
.changeCity {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  border-radius: 0.1rem;
}
</style>
