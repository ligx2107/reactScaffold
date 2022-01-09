import React, { Component } from 'react'
//引入容器组件
import Counter from './containers/Counter';

import Person from './containers/Person';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 通过props向容器组件传递store对象 
                <Counter store={store}/>
                */}
                {/**由react-redux提供的Provider统一传递store对象 */}
                <Counter/>
                <br/>
                <Person />
            </div>
        )
    }
}
