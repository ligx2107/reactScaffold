/**
 * Component的两个问题(效率低)：
 * 原因：Component中的shouldComponentUpdate()默认情况下总是返回true
 * 1. 只要执行setState()，即使不改变状态数据，组件也会重新render
 * 2. 只要当前组件重新render，就会自动重新render子组件
 * 
 * 高效处理方式：
 * 1. 只有state状态数据发生变化时，才重新render
 * 2. 只有props传递的数据发生变化时，才重新render子组件
 * 
 * 解决方案：
 * 1. 手动重写shouldComponentUpdate钩子，判断state和props是否发生变化，有变化时返回true，否则返回false
 * 2. 类组件继承PureComponent，而不再直接继承Component
 *    PureComponent实现了一个state和props的浅比较，只有当state和props发生变化时才会重新render
 */
import React, { Component, PureComponent } from 'react'
import './index.css';

export default class Paren extends PureComponent {

    state = {userName: 'Mark'}

    changeName = () => {
        this.setState({userName: 'Tom'});
    }

    render() {
        const {userName} = this.state
        return (
            <div className='parent'>
                <h2>我是父组件</h2>
                <h3>我的名字：{userName}</h3>
                <button onClick={this.changeName}>点我改名字</button>
                <Child userName={userName}/>
            </div>
        )
    }
}

class Child extends PureComponent {
    render(){
        return (
            <div className='child'>
                <h2>我是子组件</h2>
                <h3>父组件传递的名字：{this.props.userName}</h3>
            </div>
        )
    }
}
