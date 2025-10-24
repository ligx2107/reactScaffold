import React, { Component, Fragment, forwardRef } from 'react';

class Son extends Component {
    render(){
        return (
            <Fragment>
                <div>
                    <h2>孙组件</h2>
                    <h3>接收到的属性：{this.props.name}</h3>
                    <input type="text" ref={this.props.grandRef}/>
                </div>
            </Fragment>
        );
    }
}

class Father extends Component {
    render(){
        return (
            <Fragment>
                <Son grandRef={this.props.grandRef}/>
            </Fragment>
        );
    }
}

// 通过forwardRef，自定义属性转发ref到目标组件上
// forwardRef会创建一个组件，这个组件可以将其接收的ref属性转发到其组件树下的另一个组件中
const NewFather = forwardRef((props, ref) => <Son grandRef={ref} {...props}/>);

export default class GrandFather extends Component {

    // 展示输入框内数据
    show = () => {
        console.log(this.node.value);
    }

    // 清空输入框内数据
    clearValue = () => {
        this.node.value = '';
    }

    render() {
        return (
            <div>
                <NewFather ref={(node)=>{this.node = node}} name="test"/>
                <button onClick={this.show}>点击展示</button>
                <button onClick={this.clearValue}>点击清空</button>
            </div>
        );
    }
}