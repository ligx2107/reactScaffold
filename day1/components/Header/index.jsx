import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './index.css';

export default class Header extends Component {

    // 增加props参数类型及必要性验证
    static propTypes = {
        receiveNewTodo:PropTypes.func.isRequired
    }

    // 自定义键盘敲击事件
    handleKeyUp = (event) => {
        if(event.keyCode === 13){
            // 回调父组件传递过来的方法
            this.props.receiveNewTodo(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
