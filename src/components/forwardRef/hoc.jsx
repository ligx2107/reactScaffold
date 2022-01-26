import React, {Component, forwardRef, useEffect, useRef} from 'react';

// 定义HOC高阶组件
const HOC = BaseComponent => {
    class Wrap extends Component {
        render(){
            const {forwardRef, pro} = this.props;
            return <BaseComponent ref={forwardRef} {...pro}/>
        }
    }

    return forwardRef((props, ref) => <Wrap forwardRef={ref} pro={props} />);
}

class Index extends Component {
    componentDidMount(){
        console.log('@@@@');
    }

    render(){
        return <div>Hello World</div>
    }
}

const HOCIndex = HOC(Index);

// 暴露函数式组件
export default () => {
    // 使用useRef定义ref
    const node = useRef();
    // 使用useEffect模拟生命周期钩子
    useEffect(() => {
        console.log('组件信息',node.current);
    },[]);

    return <div><HOCIndex ref={node} a={1}/></div>
}