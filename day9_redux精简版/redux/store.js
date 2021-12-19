/**
 * 该文件用于创建并暴露一个store对象，整个应用只用一个store对象
 */

//引入createStore，用于创建redux中最为核心的store对象
import {createStore} from 'redux';
//引入为Counter组件服务的reducer
import countReducer from './countReducer';

//暴露store
export default createStore(countReducer);