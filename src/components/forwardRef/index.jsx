import React, { Component, Fragment } from 'react';

class Son extends Component {
    render(){
        return (
            <Fragment>
                <div>
                    <h2>孙组件</h2>
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
const NewFather = React.forwardRef((props, ref) => <Father grandRef={ref} {...props}/>);

export default class GrandFather extends Component {

    show = () => {
        console.log(this.node.value);
    }

    render() {
        return (
            <div>
                <NewFather ref={(node)=>{this.node = node}}/>
                <button onClick={this.show}>点击展示</button>
            </div>
        );
    }
}