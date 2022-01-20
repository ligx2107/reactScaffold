/**
 * Context：一种组件间通信方式，常用于祖组件与后辈组件间的通信
 */
import React, { Component } from 'react'
import './index.css';

// 创建context对象
const MyContext = React.createContext();
// 解构获取所Provider和Consumer
const {Provider, Consumer} = MyContext;
export default class Parent extends Component {

    state = {userName:'Mark', age: 18}

    render() {
        const {userName, age} = this.state;
        return (
            <div className='parent'>
                <h2>我是父组件</h2>
                <h3>我的用户名是: {userName}</h3>
                {/* 通过Provider标签向后代组件传递数据 */}
                <Provider value={{userName, age}}>
                    <Son />
                </Provider>
            </div>
        )
    }
}

class Son extends Component {
    render() {
        return (
            <div className='son'>
                <h2>我是子组件</h2>
                <Grandson />
            </div>
        )
    }
}

// class Grandson extends Component {
//     // 声明接收context, 此种方式只适合与类式组件
//     static contextType = MyContext;
//     render() {
//         const {userName, age} = this.context;
//         return (
//             <div className='grandson'>
//                 <h2>我是孙组件</h2>
//                 <h3>从父组件获取的用户名是: {userName}, 年龄：{age}</h3>
//             </div>
//         )
//     }
// }

function Grandson(){
    return (
        <div className='grandson'>
            <h2>我是孙组件</h2>
            <h3>从父组件获取的用户名是: 
                {/* Consumer方式在类式组件和函数式组件中都可以使用
                    Consumer内部为一个函数，入参即为传递过来的参数信息 */}
                <Consumer>
                    {
                        value => `${value.userName}, 年龄：${value.age}`
                    }
                </Consumer>
            </h3>
        </div>
    );
}
