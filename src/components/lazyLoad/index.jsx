//创建外壳组件
import React,{Component, lazy, Suspense} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

import Loading from './Loading';

//通过react的lazy函数，实现路由组件的懒加载
const About = lazy(() => import('./About'));
const Home = lazy(() => import('./Home'));


// import About from './About';
// import Home from './Home';

//创建并暴露组件
export default class LazyLoad extends Component {
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
                            <NavLink className="list-group-item" to="/about">about</NavLink>
                            <NavLink className="list-group-item" to="/home">home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 路由组件的注册需在react的Suspense组件内完成，同时fallback指定异常时展示的组件 */}
                                <Suspense fallback={<Loading />}>
                                    <Switch>
                                        <Route path="/about" component={About} />
                                        <Route path="/home" component={Home} />
                                    </Switch>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}