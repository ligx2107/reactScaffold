//创建外壳组件
import React,{Component} from 'react';

import Header from './components/Header';
import List from './components/List';

//创建并暴露组件
export default class App extends Component {
    render(){
        return (
            <div className="container">
                <Header/>
                <List/>
            </div>
        );
    }
}