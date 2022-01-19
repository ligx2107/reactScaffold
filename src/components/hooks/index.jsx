import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * 类组件
 * 
 
class Demo extends Component {

    state = {number: 0};

    increment = () => {
        this.setState(state => ({number: state.number + 1}));
    }

    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    //生命周期钩子
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(state => ({number: state.number + 1}));
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1>当前数据为：{this.state.number}</h1>
                <button onClick={this.increment}>点我+1</button>
                <button onClick={this.unmount}>卸载</button>
            </div>
        );
    }
}
*/



/**
 * 函数式组件
 * 此函数会执行1+n次
 */
function Demo() {
    
    // 通过调用React.useState, 使得函数式组件可以使用状态数据
    // React.useState(initState)方法入餐为状态初始值，返回值为一个数组，第一个元素为状态值，第二个元素为操作状态的方法
    const [number, setNumber] = React.useState(0);

    // 通过调用React.useEffect函数模拟生命周期钩子
    // React.useEffect函数接收两个参数，第一个参数为一个回调函数(返回的函数相当于ComponentWillUnmount)，第二个参数为一个被监听状态的数组，当第二个参数为空时，则表示监听所有状态变化(ComponentDidMount + ComponentDidUpdate)，为空数组时表示不监听任务状态变化(ComponentDidMount)
    React.useEffect(() => {
        let timer = setInterval(() => {
            setNumber(number => number + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    },[]);

    // 通过调用React.useRef()模拟类组件的ref
    const myRef = React.useRef();

    // 加1按钮方法
    function increment() {
        // setNumber(number + 1); 第一种写法
        setNumber(number => number + 1); //第二种写法
    }

    // 卸载方法
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    // 展示input信息
    function show(){
        console.log('input value: ', myRef.current.value);
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h1>当前数据为：{number}</h1>
            <button onClick={increment}>点我+1</button>
            <button onClick={unmount}>卸载</button>
            <button onClick={show}>展示</button>
        </div>
    );
}


export default Demo;