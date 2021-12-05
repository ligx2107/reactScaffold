import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import MyNavLink from '../../components/MyNavLink';
import News from './News';
import Messages from './Messages';

// 路由组件
export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        {/* 二级路由需要带有所属一级路由作为前置路由 */}
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                    {/* 路由注册 */}
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/message" component={Messages}></Route>
                        <Redirect to="/home/news"/>
                    </Switch>
                </div>
            </div>
        )
    }
}
