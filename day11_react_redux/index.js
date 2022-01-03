//入口文件
//引入React核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入组件
import App from './App';
//引入store
import store from './redux/store';
//引入Provider，对store对象集中处理
import {Provider} from 'react-redux';

ReactDOM.render(
    /**
     * 通过react-redux提供的Provider，将store对象传递给App组件内的所有容器组件
     */
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
 );

//react-redux底层自动监测redux中的状态变化
//监测redux中状态的改变
// store.subscribe(() => {
//     ReactDOM.render(<App />,document.getElementById('root'))
// });