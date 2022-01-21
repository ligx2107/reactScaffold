import React, { Component } from 'react';
import Child from './Child';
import './index.css';

/**
 * 错误边界(Error Boundary)：用来捕获后代组件错误，渲染出备用页面
 * 注：1. 只能捕获后代组件生命周期产生的错误，不能捕获组件自身产生的错误和其他组件在合成事件、定时器中产生的错误
 *    2. 只能在运行编译后代码的环境中稳定生效
 */
export default class Parent extends Component {

    state = {hasErrors: false}

    // 声明周期钩子, 子组件生命周期产生错误时被调用
    static getDerivedStateFromError(error){
        // 在render之前调用，返回新的state
        return {hasErrors: true}
    }

    // 生命周期钩子，错误处理函数，子组件产生错误时调用
    componentDidCatch(error, errorInfo){
        // 此钩子一般用来统计错误数据
        console.log(error, errorInfo)
    }

    render() {
        return (
            <div className='parent'>
                <h2>我是Parent组件</h2>
                {this.state.hasErrors ? <h2>出现异常</h2> : <Child />}
            </div>
        );
    }
}