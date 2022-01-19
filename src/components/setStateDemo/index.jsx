import React, { Component } from 'react';

export default class Demo extends Component {

    state = {number:0};

    increment = () => {
        /**
         * 对象式setState
         * setState的回调函数：可选，在react执行完状态更新且界面也更新(render调用之后)才被调用
         * 状态的更新不依赖原状态时，常用对象式setState
         
        const {number} = this.state;
        this.setState({number: number + 1}, () => {
            console.log('current number: ', this.state.number);
        });
        */

        /**
         * 函数式setState
         * setState第一个参数为一个函数，此函数接收两个参数，当前状态state及调用组件时传递的参数props，返回状态state的更新
         * setState第二个参数为可选回调函数，具体使用同对象式setState
         * 状态的更新依赖于原状态时，常用函数式setState
         */
        this.setState((state, props) => {
            console.log(state, props);
            return {number: state.number + 1};
        });
    }

    render() {
        return (
            <div>
                <h1>当前数据为：{this.state.number}</h1>
                <button onClick={this.increment}>点击加1</button>
            </div>
        );
    }
}