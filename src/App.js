//创建外壳组件
import React,{Component} from 'react';

import Header from './components/Header';
import List from './components/List';

//创建并暴露组件
export default class App extends Component {

    //初始化
    state = {
        users:[], //用户数据
        isFirstShow: true, //是否第一次展示
        isLoading: false, //是否正在加载
        errInfo: '' //异常信息 
    };

    //定义状态变更操作方法
    updateState = (stateObj) => {
        this.setState(stateObj);
    }

    render(){
        return (
            <div className="container">
                <Header updateState={this.updateState}/>
                <List {...this.state}/>
            </div>
        );
    }
}