<template>
  <div class="info">
    <div class="cov">
      <div class="top">
        <div class="title">病毒信息</div>
        <span class="more"><a href="#">查看更多></a></span>
      </div>
      <p>{{ covDesc.note1 }}</p>
      <p>{{ covDesc.note2 }}</p>
      <p>{{ covDesc.note3 }}</p>
      <p>{{ covDesc.remark1 }}</p>
      <p>{{ covDesc.remark2 }}</p>
      <p>{{ covDesc.remark3 }}</p>
    </div>
    <div class="hotPoint">
      <div class="top">
        <img src="../../../assets/images/hot.png" alt="" />
        <span class="more"><a href="#">查看更多></a></span>
      </div>
      <div class="hotList">
        <ul>
          <li v-for="item in news" :key="item.id">
            <span>最新</span>{{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    covDesc: {
      type: Object,
      default: function () {
        return {};
      },
    },
    news: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  padding: 0.2rem 0.2rem 0 0.2rem;
  .top {
    overflow: hidden;
  }
  .title {
    float: left;
    text-align: left;
    border-left: 0.1rem solid rgb(20, 49, 128);
    padding-left: 0.1rem;
  }
  p {
    line-height: 0.4rem;
    color: #666;
  }
  .hotPoint {
    img {
      width: 1.4rem;
      height: 0.48rem;
      border-left: 0.1rem solid rgb(20, 49, 128);
      padding-left: 0.1rem;
    }
    .hotList {
      li {
        margin: 0.3rem 0;
        line-height: 0.5rem;
        letter-spacing: 0.1rem;
        color: #666;
        span {
          background-color: #f74c31;
          display: inline-block;
          height: 0.32rem;
          margin-top: 0.06rem;
          margin-right: 0.08rem;
          padding: 0 0.04rem;
          color: #fff;
          font-weight: 500;
          font-size: 0.22rem;
          line-height: 0.32rem;
          text-align: center;
          vertical-align: top;
          border-radius: 0.04rem;
          letter-spacing: 0.1rem;
        }
      }
    }
  }
  .hotList::after {
    display: block;
    height: 0.01rem;
    margin: 0 0.16rem;
    background: #ebebeb;
    transform: scaleY(0.5);
    content: "";
  }
}
.more {
  a {
    float: right;
    line-height: 0.48rem;
    color: blue;
  }
}
</style>s