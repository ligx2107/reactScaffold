## 如何确定将数据放在哪个组件的state中？
   - 某个组件使用：放在其自身的state中
   - 某些组件使用：放在他们共同的父组件的state中(状态提升)

## 关于父子组件之间的通信：
   - 父组件给子组件传递数据：通过props传递
   - 子组件给父组件传递数据：父组件提前通过props传递一个函数给子组件，子组件通过该函数传递数据到父组件

## 状态state与状态操作方法的放置关系
   - 状态state放在哪里，状态操作方法就放在哪里

## react脚手架配置代理
### 方法一
> 在package.json中追加proxy配置
>  ```json
>  "proxy":"http://localhost:5000"
>  ```
>  说明：
>   1. 优点：配置简单，前段请求资源时可以不加任何前缀
>   2. 缺点：不能配置多个代理
>   3. 工作方式：当请求的资源不存在时，则将该请求转发给proxy指定的目标地址

### 方法二
> 1. 在src下创建代理配置文件setupProxy.js
> 2. 编写setupProxy.js配置文件
> ```js
>   const proxy = require(http-proxy-middleware);
>   module.exports = function(app){
>     app.use('/api1',{
>        target:'http://localhost:5000',
>        changeOrigin:true,
>        pathRewrite:{'^/api1', ''}
>     });
>   }
> ```
>   说明：
>    1. 优点：可以同时配置多个代理，可灵活控制请求是否走代理
>    2. 缺点：配置比较繁琐，前段请求资源时必须加前缀

## 消息订阅与发布机制完成任意组件间的数据传递
   - npm install pubsub-js
   - 数据接收组件订阅消息 subscribe('messageId', (_, message) => {})
   - 数据发送方发送消息  publish('messageId', message)
> [pubsub-js地址](https://github.com/mroderick/PubSubJS)

## 路由组件与一般组件的区别
   - 写法不同：
     > 一般组件: <Demo />

     > 路由组件：<Route path="/xxxx" component={Demo} />  v6: <Route path="/xxxxx" element={<Demo />}/>
   - 存放的位置不同：
     > 一般组件：components文件夹下

     > 路由组件：pages文件夹下
   - 接收到的props不同：
     > 一般组建：写组件标签时传递什么，props就能接受到什么
     
     > 路由组件：可接收到三个固定的属性
       >> history:
             go:
             goBack:
             goForward:
             push:
             replace:
       >> location:
             pathname:
             search:
             state:
       >> match:
             params:
             path:
             url:       