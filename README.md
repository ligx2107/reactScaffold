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

## BrowserRouter与HashRouter之间的区别
   - 底层原理不同：
      > BrowserRouter使用的是H5dehistory API，不兼容IE9及以下版本的浏览器
      > HashRouter使用的是URL的哈希值
   - path表现形式不同：
      > BrowserRouter的路径中没有#
      > HashRouter的路径中有#
   - 刷新后对路由state参数的影响：
      > BrowserRouter没有影响
      > HashRouter刷新后会导致路由 **state参数丢失** 
   - 其他：
      > HashRouter可以用于解决一些路径错误的相关问题，例如：css样式丢失问题

## redux开发工具
   - 安装：npm install redux-devtools-extension
   - 使用：store中引入composeWithDevTools且作为createStore方法调用的第二个参数

## 打包及本地部署运行
   - 打包：npm run build
   - 部署：
      - 安装serve：npm install serve -g
      - 部署并运行打包后的程序：serve build (注：build为打包程序所在路径)
      
## setState
   - setState本身是个同步方法，程序主线程调用setState通知react更新状态，react更新状态的动作是异步执行的，即：程序通知和真正执行之间是异步的
   - setState的两种形式:
      - 对象式setState(stateObj,[callback]): 
         - 使用场景：状态变更不依赖于原始状态
         - callback回调执行: react完成状态的变更同时页面重新渲染(调用render)后，调用此回调函数
      - 函数式setState((state, props) => {}, [callback]):
         - 使用场景：状态变更依赖于原始状态
         - 状态变更函数：接收两个参数，原始state及调用组件传递参数props，返回state的变更结果
         - callback回调函数：同对象式setState

## lazyLoad延迟加载
   - 常用于路由组件，实现按需加载
   - 具体实现：
      1. 通过react的lazy函数，实现路由组件的懒加载
      2. 通过react的Suspense包裹路由组件的注册，同时指定fallback

## hooks
   - 使得函数式组件获得类式组件state、ref及生命周期钩子操作的能力
   - state hooks:
      - 调用React.useState(initState)，使得函数式组件可以获得并修改状态数据
         - initState: 状态数据初始值
         - useState返回值为数组形式[state, setState], state为状态数据，setState为设置状态值的方法
   - ref hooks:
      - 调用React.useRef()来模拟类式组件的容器化ref
   - Effect hooks:
      - 调用React.useEffect(effectCallback, [dependencyList])，模拟类式组件生命周期钩子
         - 必选effectCallback，此回调函数所返回的函数，可模拟componentWillUnmount钩子
         - 可选dependencyList, 状态列表，为null时表示监听所有状态的变化，即effectCallback模拟了componentDidMount + componentDidUpdate两个钩子；为[]时表示不监听任何状态变化，即effectCallback模拟了componentDidMount钩子

## 继承Component实现类式组件的低效问题
   - 原因：Component中的shouldComponentUpdate钩子默认情况下总是返回true
      - 只要调用setState()，即使状态没有发生变化，组件也会重新render
      - 只要当前组件重新render，则会自动重新render子组件
   - 高效处理方式：
      - 只有state状态发生变化时，才重新render当前组件
      - 只有props传递的参数发生变化时，才重新render子组件
   - 解决方案：
      - 手动重写shouldComponentUpdate钩子，判断state和props是否发生变化，如变化则返回true，否则返回false
      - 类式组件继承PureComponent，而不再直接继承Component
         - PureComponent实现了一个**state和props的浅比较** ，只有当state和props发生变化时才会重新render

## Context
   - 一种组件间的通信方式，常用于祖组件与后辈组件间的通信
   - 具体实现：
      1. 调用React.createContext()创建context对象
         ```js
         const MyContext = React.createContext();
         ```
      2. 组件通过Provider向后辈组件传递数据
         ```js
         <MyContext.Provider value={}>
            <Child />
         </MyContext.Provider>
         ```
      3. 后辈组件接收数据
         - 类式组件：
            1. 声明接收context
            ```js
            static contextType = MyContext;
            ```
            2. 通过类式组件实例对象的context属性获取参数
         - 函数式组件：
            1. 通过Consumer方式接收数据, 此方式在类式组件中同样适用
            ```js
            <Consumer>
               {
                  value => {return `名字: ${value.userName}, 年龄: ${value.age}`}
               }
            </Consumer>
            ```