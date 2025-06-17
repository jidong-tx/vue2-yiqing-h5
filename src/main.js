import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/css/reset.css"
// import "./assets/js/phone.js"
// 引入vant库
import "./plugins/vant.js"

Vue.config.productionTip = false


// import echarts from "echarts"
// Vue.prototype.$echarts = echarts;


// 导入自定义插件并使用
import echarts from "./plugins/echats";
Vue.use(echarts);

// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//引入eventBus
import Bus from './utils/eventBus'
Vue.prototype.$bus = Bus;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
