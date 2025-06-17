// 首页网络请求的方法

import axios from "axios";
import base from "./base";
import md5 from "md5-js";

const api = {
    getCovInfo() {
        return axios.get(base.host + base.covInfo);
    },
    getMapInfo() {
        return axios.get(base.baseUrl + base.mapInfo)
    },

    // 城市疫情信息

    getCityInfo(city_name) {
        // appid12440city_name北京formatjson + 密钥
        let sign = md5('appid12440city_name' + city_name + 'formatjson4869f34592e34c8ef5c540c80ade1745');
        let canshu = 'format=json&appid=12440&city_name=' + city_name + '&sign=' + sign;
        return axios.get(base.baseUrl + base.cityInfo + '?' + canshu);
    },
    getSwiperData() {
        return axios.get(base.swiperData)
    },
    getCityName() {
        return axios.get(base.CityName)
    },
    getTripInfo() {
        return axios.get(base.tripInfo)
    },
    // 查询出行防疫政策
    queryRules(fromId, toId) {
        return axios.get(base.tripRules, {
            params: {
                key: "171e165a7d991c5f6ecd5194c54778ef",
                from: fromId,
                to: toId
            }
        })
    }
}

export default api