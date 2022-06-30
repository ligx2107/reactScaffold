/**
 * 容器组件
 * 1. 容器组件包裹UI组件，两者满足父子关系，通过props向UI组件传递redux中所保存的状态及操作状态的方法
 * 2. 容器组件负责与redux进行交互
 * 3. 容器组件内不能直接引入store，需父组件通过props进行传递
 * */

import React, { Component } from 'react';

//引入connect用于连接UI组件
import {connect} from 'react-redux';

//引入actions
import {increment, decrement, incrementAsync} from '../../redux/actions/count';

// 定义UI组件，UI组件中不使用任何redux的api，只做展示
class Counter extends Component {

    //加
    increment = () => {
        //获取选择的值
        const {value} = this.selectValue;
        this.props.increment(value * 1);
    }

    //减
    decrement = () => {
        //获取选择的值
        const {value} = this.selectValue;
        this.props.decrement(value * 1);
    }

    //奇数加
    incrementIfOdd = () => {
        //获取选择的值
        const {value} = this.selectValue;
        if(this.props.count % 2 !== 0){
            this.props.increment(value * 1);
        }
    }

    //异步加
    incrementAsync = () => {
        //获取选择的值
        const {value} = this.selectValue;
        this.props.incrementAsync(value * 1, 500);
    }


    render() {
        return (
            <div>
                <h1>当前值：{this.props.count}, 下面组件总人数：{this.props.persons.length}</h1>
                <select name="number" id="number" ref={s => this.selectValue = s}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
};


//方法返回值作为传递给UI组件的状态数据
const mapStateToProps = state => ({count:state})

//方法返回值作为传递给UI组件的状态操作方法
const mapDispatchToProps = dispatch => (
    {
        increment: number => {
            //通知redux执行加法
            dispatch(increment(number))
        },
        decrement: number => dispatch(decrement(number)),
        incrementAsync: (number, time) => {
            dispatch(incrementAsync(number, time))
        }
    }
)

/**
 * 使用connect创建并暴露一个容器组件
 * 1. 调用connect方法参数为两个函数，分别传递状态state以及操作状态的具体方法
 * 2. 调用connect方法的返回值方法传递一个参数，即UI组件
 * */
// export default connect(mapStateToProps,mapDispatchToProps)(CounterUI);

/**
 * connet创建容器组件的简写方式
 * 1. mapStateToProps -> 直接以箭头函数方式实现，无需定义
 * 2. mapDispatchToPros -> 以对象方式实现
 */
export default connect(
    state => ({count:state.counter, persons: state.persons}), 
    {
        increment,
        decrement,
        incrementAsync
    }
 )(Counter);