import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
const Hesuan = () => import("../views/Hesuan/Hesuan.vue")
const Area = () => import("../views/Area/area.vue")
const Prevention = () => import("../views/Prevention/Prevention.vue")
const PreventionMap = () => import("../views/Prevention/PreventionMap.vue")
const Trip = () => import("../views/Trip/Trip.vue")
const ChangeCity = () => import("../views/ChangeCity/ChangeCity.vue")
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/hesuan",
    name: "Hesuan",
    component: Hesuan
  },
  {
    path: "/area",
    name: Area,
    component: Area
  },
  {
    path: "/prevention",
    name: Prevention,
    component: Prevention

  },
  {
    path: "/citys/:cityName",
    name: PreventionMap,
    component: PreventionMap,
    props: true
  },
  {
    path: "/trip",
    name: "Trip",
    component: Trip
  },
  {
    path: "/changeCity",
    name: "ChangeCity",
    component: ChangeCity
  }
]

const router = new VueRouter({
  routes
})

export default router
