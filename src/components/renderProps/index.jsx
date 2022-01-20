import React, { Component } from 'react';

class Parent extends Component {

    state = {name:'Mark'}

    render() {
        return (
            <div className='parent'>
                <h2>我是父组件</h2>
                {/* 通过children props方式向子组件传递数据 
                <A>
                    {this.state.name}
                </A>
                */}

                {/* 通过children props方式构建父子组件关系， 
                <A>
                    <B />
                </A>
                */}
                {/* 通过render props方式向子组件传递数据 */}
            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div className='a'>
                <h2>我是A组件</h2>
                {/* 子组件接收children props方式传递的数据 
                <h3>通过children Props传递数据：{this.props.children}</h3>
                */}

                {/* 通过children props方式构建的父子关系，使用this.props.children调用子组件 
                {this.props.children}
                */}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h2>我是B组件</h2>
            </div>
        );
    }
}

export default Parent;