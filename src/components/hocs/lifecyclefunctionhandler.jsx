import React, { Component } from 'react';


// 正向属性代理方式实现生命周期函数劫持
const HOC = (Component)=>{
    const proDidMount = Component.prototype.componentDidMount
    Component.prototype.componentDidMount = function(){
        console.log('劫持生命周期函数：componentDidMount')
        proDidMount.call(this)
    }

    return class WrapComponent extends Component {
        render(){
            return <Component {...this.props} />
        }
    }
}

class hoc1 extends Component {

    componentDidMount(){
        console.log('----didMount----')
    }

    render() {
        return (
            <div>
                <span>hello, world</span>
            </div>
        );
    }
}


// 反向继承实现生命周期函数劫持
const HOC2 = (BaseComponent) => {
    const preDidMount = BaseComponent.prototype.componentDidMount;
    return class WrapComponent extends BaseComponent {
        componentDidMount(){
            console.log('----生命周期函数劫持-----')
            if(preDidMount){
                preDidMount.apply(this);
            }
        }

        render(){
            return super.render();
        }
    }
}

class Index extends Component {
    componentDidMount(){
        console.log('----didMount----')
    }

    render(){
        return <div><span>hello, world</span></div>
    }
}

export default HOC2(Index);