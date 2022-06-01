import React, {Component, forwardRef, useEffect, useRef} from 'react';

/***
 * 高阶组件常用方式：
 * 1. 正向属性代理: 用组件包裹一层原始组件，在代理组件上可以实现一些对原始组件的操作
 *      优点：
 *          1. 与业务组件低耦合，无须知道原始组件的内部逻辑，只需控制原始组件的渲染及传递props
 *          2. 适用于class组件及function组件
 *          3. 可多层嵌套使用
 *      缺点：
 *          1. 无法直接获取原始组件的状态值，需借助其他手段
 *          2. 无法直接继承静态属性
 * 2. 反向组件继承: 代理组件直接继承原始组件
 *      优点：
 *          1. 方便获取原始组件内部状态，如：state，props，生命周期，绑定的事件函数等
 *          2. 代理组件可直接继承原始组件的静态方法
 *      缺点：
 *          1. 与原始组件强耦合，需要了解原始组件的内部逻辑
 *          2. 多层嵌套时，当前状态会覆盖上一层状态
 */

// 1. 正向属性代理
const Proxy = (BaseComponent) => {
    return class Advance extends Component {
        state = {name: 'Tom'}
        render(){
            return <BaseComponent {...this.props} {...this.state}/>
        }
    }
}

// 2. 方向组件继承
const ExtendsProxy = (BaseComponent) => {
    return class WrapComponent extends BaseComponent {

    }
}

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