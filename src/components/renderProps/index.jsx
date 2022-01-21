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

                {/* 通过children props方式构建父子组件关系，父组件无法向子组件传递数据
                <A>
                    <B />
                </A>
                */}
                {/* 通过render props方式向子组件传递数据，父组件可以向子组件传递数据 */}
                <A render={(name)=><B p={name} />}/>
            </div>
        );
    }
}

class A extends Component {

    state = {name:'tom'}

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

                {/* 通过render prpos方式构建的父子关系，使用this.props.render()调用子组件 */}
                {this.props.render(this.state.name)}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h2>我是B组件</h2>
                <h3>A组件传递的数据: {this.props.p}</h3>
            </div>
        );
    }
}

export default Parent;