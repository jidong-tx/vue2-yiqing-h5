<template>
  <div class="CovNumber">
    <div class="CovNum">
      <div class="box">
        <div class="time">截止北京时间:{{ covData.modifyTime | time }}</div>
        <ul class="content">
          <li>
            <p class="yesterday">
              较昨日<span>{{ covData.currentConfirmedIncr | addNum }}</span>
            </p>
            <p class="num">{{ covData.currentConfirmedCount | formatNum }}</p>
            <p class="desc">现存确诊</p>
          </li>
          <li>
            <p class="yesterday">
              较昨日<span>{{ covData.suspectedIncr | addNum }}</span>
            </p>
            <p class="num">{{ covData.suspectedCount | formatNum }}</p>
            <p class="desc">境外输入</p>
          </li>
          <li>
            <p class="yesterday">
              较昨日<span>{{ covData.seriousIncr | addNum }}</span>
            </p>
            <p class="num">{{ covData.seriousCount | formatNum }}</p>
            <p class="desc">现存无症状</p>
          </li>
          <li>
            <p class="yesterday">
              较昨日<span>{{ covData.confirmedIncr | addNum }}</span>
            </p>
            <p class="num">{{ covData.confirmedCount | formatNum }}</p>
            <p class="desc">累计确诊</p>
          </li>
          <li>
            <p class="yesterday">
              较昨日<span>{{ covData.deadIncr | addNum }}</span>
            </p>
            <p class="num">{{ covData.deadCount | formatNum }}</p>
            <p class="desc">累计死亡</p>
          </li>
          <li>
            <p class="yesterday">
              较昨日<span>{{ covData.curedIncr | addNum }}</span>
            </p>
            <p class="num">{{ covData.curedCount | formatNum }}</p>
            <p class="desc">累计治愈</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: ["covData"],
  methods: {},
  filters: {
    time: function (val) {
      return new Date(val).toLocaleString("chinese", { hour12: false });
    },
    addNum: function (val) {
      return val > 0 ? "+" + val : val;
    },
    formatNum: function (val) {
      let num = val;
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
    },
  },
};
</script>

<style lang="less" scoped>
.CovNum {
  background-color: #f5f5f5;
  padding-top: 0.2rem;
  color: #ccc;
  .box {
    background-color: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    //   box-shadow: 0 0.08rem 0.24rem 0 rgb(0, 0, 0, 5%);
  }
  li {
    width: 33.33333%;
    margin: 0.1rem 0;
    font-weight: 700;
    font-size: 0.4rem;
  }
}
.num {
  font-size: 0.4rem;
  font-weight: 700;
}
.time {
  margin-left: 00.3rem;
  color: #666;
}
.yesterday {
  color: #666;
  font-size: 0.24rem;
}
.desc {
  color: #333;
  font-size: 0.3rem;
}
li:nth-child(1) .num {
  color: rgb(52, 64, 190);
}
li:nth-child(2) .num {
  color: rgb(103, 190, 52);
}
li:nth-child(3) .num {
  color: rgb(52, 160, 75);
}
li:nth-child(4) .num {
  color: rgb(190, 52, 137);
}
li:nth-child(5) .num {
  color: rgb(155, 194, 92);
}
li:nth-child(6) .num {
  color: rgb(211, 98, 22);
}
.line {
  height: 0.01rem;
  margin: 0.3rem;
  background: #ebebeb;
  transform: scaleY(0.5);
}
</style>