import React, { Component } from 'react';
//引入store
import store from '../../redux/store';

//引入action
import {createIncrementAction, createDecrementAction} from '../../redux/countAction';

export default class Counter extends Component {

    componentDidMount() {
        //监测redux中的状态变化
        store.subscribe(() => {
            this.setState({});
        });
    }


    //加
    increment = () => {
        //获取选择的值
        const {value} = this.selectValue;
        //通知store
        // store.dispatch({type:'increment', data: value * 1});
        store.dispatch(createIncrementAction(value * 1));
    }

    //减
    decrement = () => {
        //获取选择的值
        const {value} = this.selectValue;
        //通知store
        // store.dispatch({type:'decrement', data: value * 1});
        store.dispatch(createDecrementAction(value * 1));
    }

    //奇数加
    incrementIfOdd = () => {
        //获取选择的值
        const {value} = this.selectValue;
        const count = store.getState();
        if(count % 2 !==0){
            //通知store
            store.dispatch(createIncrementAction(value * 1));
        }
    }


    render() {
        return (
            <div>
                {/* store.getState() --> 从store中获取状态state */}
                <h1>当前值：{store.getState()}</h1>
                <select name="number" id="number" ref={s => this.selectValue = s}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>
            </div>
        );
    }
};