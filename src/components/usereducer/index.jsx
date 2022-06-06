import React, {useReducer} from 'react';

/***
 * useReducer: 是useState的代替方案，用于state的复杂变化, 当更新逻辑比较复杂时，考虑使用useReducer实现
 */

const initState = {count: 1};
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1};
        default:
            return initState;
    }
}

export default function(){
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            count：{state.count} <br />
            <button onClick={() => dispatch({type:'increment'})}>增加</button>&nbsp;
            <button onClick={() => dispatch({type:'decrement'})}>减少</button>
        </div>
    )
}