import React, { Component } from 'react'

import './index.css';

export default class Footer extends Component {

    //全选处理函数
    checkAll = (event) => {
        this.props.checkAll(event.target.checked);
    }

    //清除全选事件处理函数
    clearAllDone = () => {
        this.props.clearAllDone();
    }

    render() {
        const {todos} = this.props;
        //计算已完成todo数量
        const doneCount = todos.reduce((pre, item) => pre + (item.done ? 1 : 0), 0);
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" checked={doneCount === total && total !== 0} onChange={this.checkAll}/>
                </label>
                <span>
                <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}
