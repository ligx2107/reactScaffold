import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                {/* 
                 1. 调用MyNavLink标签时，标签属性保存在this.props上，标签体则保存在this.props.children属性上 
                 2. 标签体内容可以通过标签体的方式展示，也可以通过标签的children属性进行指定, 
                    故：可通过props对象解构的方式将调用此标签时的标签属性和标签体内容同时进行处理
                    TODO --- activeClassName不起效果
                 */}
                <NavLink activeClassName="nav" className="list-group-item" {...this.props} />
            </div>
        );
    }
};