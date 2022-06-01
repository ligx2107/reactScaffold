import React, { Component } from 'react';

// 创建基础组件
class Base extends Component {

    state = {name:'Mark'};

    say = ()=>{
        console.log('base component');
    }

    render() {
        return (
            <div>
                hello world <br />
                <button onClick={this.say}>点击</button>
            </div>
        );
    }
}

// 继承基础组件
class Index extends Base  {
    componentDidMount(){
        console.log(this.state.name);
    }

    say = ()=>{
        console.log('extends component');
    }
}

export default Index;