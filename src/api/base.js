/*
* 公共的请求接口
*/

import Swiper from "swiper";

const base = {
    host: "http://api.tianapi.com",
    covInfo: "/ncov/index?key=046e3bfc66844bf22c66805731324d5b",
    baseUrl: "https://giea.api.storeapi.net",
    mapInfo: "/api/94/219?format=json&appid=12440&sign=40e99fcab1a10d9af302a5c2b555e1a2", // 城市的地址
    cityInfo: "/api/94/221",
    swiperData: "http://iwenwiki.com/wapicovid19/ncovimg.php", // swiper轮播图的数据
    CityName: "/city/aj/getcitycode",//切换城市

    tripInfo: "http://localhost:8888/travelCity",//出行政策接口
    tripRules: "/rules/springTravel/query"//查询出行防疫政策


}

export default base;