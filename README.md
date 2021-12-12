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
     > 一般组件: 
       >> ```js
       >>  <Demo />
       >> ```

     > 路由组件：
       >> ```js
       >>  <Route path="/xxxx" component={Demo} />  
       >> ```
       >> v6: 
       >> ```js
       >>  <Route path="/xxxxx" element={<Demo />}/>
       >> ```
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

## 解决多级路径刷新页面样式丢失问题
   - public/index.html中引入样式时使用 **/** 来代替 **./** 相对路径方式
   - public/index.html中引入样式时使用 **%PUBLIC_URL%** 代替 **/** 方式
   - 使用HashRouter代替BrowserRouter

## 路由的匹配模式
   - 默认情况下使用的是模糊匹配，输入的路径要包含注册的路径且需要顺序一致
   - 开启精准匹配模式: <Route>标签中使用 **exact** 或 **exact={true}** 标识
   - 精准匹配模式不随意开启，可能会导致无法匹配二级路径

## Redirect使用
   - Redirect一般写在所有路由注册的最下方，当所有已注册的路由都无法匹配时，跳转到Redirect指定的路由

## 嵌套路由
   - 注册子路由时，要写上父路由的path值
   - 路由的匹配是按照注册顺序进行的，逐级进行匹配

## 向路由组件传递参数
   - params参数
     > params参数在地址栏内可见
     > 路由注册时需声明所能接受的参数：
       >> ```js
       >> <Route path="/home/message/detail/:id/:title" component={Detail}/>
       >> ```
     > Link组件设定路由时需在路由路径上明确指定所传递的参数
       >> ```js
       >>  <Link to='/home/message/detail/tom/test'>测试</Link>
       >> ```
     > 路由组件接收params参数：this.props.match.params
   - search参数
     > search参数在地址栏内可见
     > 路由注册时无需声明接收参数
     > Link组件设定路由时需要在路由路径上明确指定所传递的参数
       >> ```js
       >>  <Link to='/home/message/detail/?name=tom&title=test'>测试</Link>
       >> ```
     > 路由组件接收search参数：this.props.location.search，接收到的search是urlencoded编码字符串，需通过querystring类库进行解析
   - state参数
     > state参数在地址栏中不可见
     > 路由注册时无需声明接受参数
     > Link组件设定路由时需通过对象类型参数，指定路由地址及所要传递的参数
       >> ```js
       >>  <Link to={{pathname: '/home/message/detail', state: {name: 'tom', title: 'test'}}}>测试</Link>
       >> ```
     > 路由组件接收state参数：this.props.location.state, 页面刷新时，参数可保留
## 路由跳转的两种模式
   - push模式(默认): 会将所有点击过的路由压入history栈内
   - replace模式: 需在<Link>标签内使用 **replace** 或 **replace={true}** 开启, 开启后，所点击的路由会替换history栈顶记录

## 编程式路由导航
   - 借助this.props.history对象上的API完成路由跳转
     > this.props.history.push()
     > this.props.history.replace()
     > this.props.history.goBack()
     > this.props.history.goForward()
     > this.props.history.go()

## withRouter  一个加工一般组件的函数，可以让一般组件具有路由组件的所有API