//创建外壳组件
import React,{Component} from 'react';
import {Route, Routes} from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

import MyNavLink from './components/MyNavLink';

//创建并暴露组件
export default class App extends Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中，使用<a>跳转不同的页面 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* 在react中，使用路由链接实现切换组件 -- 编写路由链接*/}
                            <MyNavLink to="/about">about</MyNavLink>
                            <MyNavLink to="/home">home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 react-router-dom v6版本新语法，使用element指定具体的组件*/}
                                <Routes>
                                    <Route path="/about" element={<About />} />
                                    <Route path="/home" element={<Home />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}