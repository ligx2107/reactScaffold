import React, {Component, useState, useRef} from 'react'

// 定义函数式原始组件
function Index(props){
    const [value, setValue] = useState(null);
    const {name, setName} = props;

    return (
        <div>
            <h1>hello world, my name is {name}</h1>
            改变名字<input type="text" onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => setName(value)}>确定</button>
        </div>
    );
}

// 定义增强组件
const HOC = (BaseComponent) => {
    return class WrapComponent extends Component {

        state = {name:'Tom'}

        setName = (name) => {
            this.setState({name:name.replace(/\s/g,"") || 'Mark'})
        }

        render(){
            return <BaseComponent {...this.props} {...this.state} setName={this.setName}/>
        }
    }
}

export default HOC(Index);

// 直接使用函数式组件实现
export function FC(props){
    const [name, setName] = useState('Li')
    const myRef = useRef();
    function comm(){
        setName(myRef.current.value);
    }
    return (
        <div>
            <h1>hello world, my name is {name}</h1>
            改变名字<input type="text" ref={myRef} />
            <button onClick={comm}>确定</button>
        </div>
    );
}