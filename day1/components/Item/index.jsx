import React, { Component } from 'react'

import './index.css';

export default class Item extends Component {

    //初始化state
    state = {mouseHandleFlag:false};

    // 定义鼠标移入/移除事件处理函数
    handleMouse = (mouseHandleFlag) => {
        return () => {
            this.setState({mouseHandleFlag: mouseHandleFlag});
        }
    }

    // 自定义复选框勾选处理函数
    handleCheck = (todoId) => {
        return (event) => {
            this.props.handleCheck(todoId, event.target.checked);
        }
    }

    // 自定义删除事件处理函数
    deleteTodo = (id) => {
        // 确认提示框
        if(window.confirm('确定删除吗?')){
            this.props.deleteTodo(id);
        }
    }

    render() {
        // 接收父组件List传递参数
        const {id, name, done} = this.props;
        // 获取鼠标操作标识
        const {mouseHandleFlag} = this.state;
        return (
            <li style={{backgroundColor:mouseHandleFlag ? "#ddd" : "white"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouseHandleFlag ? 'block':'none'}} onClick={() => {this.deleteTodo(id)}}>删除</button>
            </li>
        )
    }
}
