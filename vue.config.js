//配置参数
/**
 * devServer.proxy 
 * 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请 求代理到 API 服务器
 */
module.exports = {
    devServer: {
        // proxy: 'https://www.qyer.com'//缺点: 只能配置一个域名跨域
        proxy: {
            '/city': {
                target: 'https://bang.360.cn',
                ws: true, //指的 是否是https协议
                changeOrigin: true, //是否允许跨域
                pathRewrite: {//重写路径
                    '^/city': ''
                }
            },
            '/rules': {
                target: 'http://apis.juhe.cn',
                ws: true, //指的 是否是https协议
                changeOrigin: true, //是否允许跨域
                pathRewrite: {//重写路径
                    '^/rules': ''
                }
            }
        }

    }
}