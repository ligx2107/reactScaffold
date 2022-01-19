//入口文件
//引入React核心库
import React from 'react';
//引入ReactDOM
import ReactDOM from 'react-dom';
//引入组件
import App from './App';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
 );