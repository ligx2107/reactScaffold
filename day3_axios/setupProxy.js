//配置多个代理，需使用commonJs语法进行编写，且此文件名称不能修改
const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/api1',{ //指定代理请求的前缀地址
            target:'http://localhost:5000', //请求转发目标地址
            changeOrigin:true, //控制服务器接收到的请求头中host字段的值
            pathRewrite:{'^/api1':''} //重写请求路径(必须重写)
        })
    );
}