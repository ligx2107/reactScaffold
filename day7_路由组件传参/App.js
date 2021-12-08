//创建外壳组件
import React,{Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

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
                                {/* 注册路由 
                                    Switch: 当有相同path的路由注册时，可阻断相同path路由的重复匹配
                                    Redirect: to标签属性指定路由
                                */}
                                <Switch>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                    <Redirect to="/about"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}