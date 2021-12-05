//入口文件
//引入React核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入React-router-dom
import {BrowserRouter} from 'react-router-dom';
//引入组件
import App from './App';

//渲染App组件到页面
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);