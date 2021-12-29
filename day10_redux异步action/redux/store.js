/**
 * 该文件用于创建并暴露一个store对象，整个应用只用一个store对象
 */

//引入createStore，用于创建redux中最为核心的store对象
//引入applyMiddleware，用于使用redux-thunka
import {createStore, applyMiddleware} from 'redux';
//引入为Counter组件服务的reducer
import countReducer from './countReducer';

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

//暴露store
export default createStore(countReducer, applyMiddleware(thunk));