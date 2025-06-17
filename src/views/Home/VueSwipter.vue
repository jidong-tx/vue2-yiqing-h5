<template>
  <div>
    <p>swiper</p>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperInfo" :key="item.title">
        <img :src="item.image" width="100%" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="list">
      <li
        v-for="(item, index) in swiperInfo"
        :key="item.title"
        :class="{ active: index == num }"
        @click="changeSwiper(index)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../../api/index.js";
export default {
  created() {},

  data() {
    let that = this;
    return {
      swiperInfo: [], //轮播图数据
      num: 0,

      //   swiper配置
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        // Some Swiper option/callback...
        on: {
          slideChangeTransitionStart: function () {
            // console.log("轮播切换了--" + this.activeIndex);
            var index;
            if (this.activeIndex == 6) {
              //这个this是swiper的this ; 6是轮播的数量加一
              index = 0;
            } else {
              var index = this.activeIndex - 1;
            }
            that.num = index; // 想使用Vue 的this 需要上面存一下
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    changeSwiper(index) {
      this.num = index;
      this.swiper.slideTo(index + 1, 1000, false); //这个this.swiper就是上面计算属性return的swiper实例
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);

    //轮播图数据请求
    api.getSwiperData().then((res) => {
      console.log(res.data.result);
      this.swiperInfo = res.data.result;
    });
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  li {
    width: 20%;
    // flex-grow: 1;
    padding: 0.1rem;
    font-size: 0.24rem;
    // line-height: 0.32rem;
    margin: 00.1rem;
    background-color: #eee;
    color: #666;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .active {
    background-color: rgb(25, 156, 145);
  }
}
</style>