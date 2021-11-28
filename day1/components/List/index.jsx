import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Item from '../Item';

import './index.css';

export default class List extends Component {

    // 增加props参数类型及必要性验证
    static propTypes = {
        todos:PropTypes.array.isRequired,
        handleCheck:PropTypes.func.isRequired,
        deleteTodo:PropTypes.func.isRequired
    }

    render() {
        // 接收父组件App传递的props数据
        const {todos, handleCheck, deleteTodo} = this.props;
        return (
            <ul className="todo-main">
                {
                    //循环处理todos列表
                    todos.map((todo) => {
                      return <Item key={todo.id} {...todo} handleCheck={handleCheck} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}
