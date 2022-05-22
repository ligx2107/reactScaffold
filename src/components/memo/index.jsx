import React, { Component, memo, Fragment } from 'react';

class TextMemo extends Component {
    render(){
        console.log('渲染子组件');
        return (
            <div>Hello, world</div>
        );
    }
}

/**
 * memo(preComponent, propsAreEqual): 高阶函数，接收原始组件及props比较器函数，根据props的变化决定是否重新渲染原始组件(比较函数返回false则重新渲染，返回true则不做重新渲染)
 */
const NewTextMemo = memo(TextMemo, (pre, next) => {
    if(pre.number === next.number){
        return true;
    } else if(pre.number !== next.number && next.number > 5){
        return true;
    } else {
        return false;
    }
});

class MemoDemo extends Component {

    state = {
        num: 1,
        number: 1
    };

    render() {
        const {num, number} = this.state;
        return (
            <Fragment>
                <div>
                    改变num值，当前num值为：{num}
                    <button onClick={()=>{this.setState({num:num + 1})}}>num++</button>
                    <button onClick={()=>{this.setState({num:num - 1})}}>num--</button>
                </div>
                <div>
                    改变number值，当前number值为：{number}
                    <button onClick={()=>{this.setState({number:number + 1})}}>number++</button>
                    <button onClick={()=>{this.setState({number:number - 1})}}>number--</button>
                </div>
                <NewTextMemo num={num} number={number} />
            </Fragment>
        );
    }
}

export default MemoDemo;