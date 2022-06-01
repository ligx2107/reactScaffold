import React, { Component } from 'react';

const HOC = (Component)=>{
    const proDidMount = Component.prototype.componentDidMount
    Component.prototype.componentDidMount = function(){
        console.log('劫持生命周期函数：componentDidMount')
    }
    proDidMount.call(this)

    return class WrapComponent extends Component {
        render(){
            return <Component {...this.props} />
        }
    }
}

@HOC
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

export default hoc1;