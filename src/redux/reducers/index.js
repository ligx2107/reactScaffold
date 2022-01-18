/**
 * 该文件用于汇总所有的reducers
 */

// 引入combineReducers
import {combineReducers} from 'redux';

//引入为Counter组件服务的reducer
import countReducer from './count';
//引入为Person组件服务的reducer
import PersonReducer from './person';

//整合reducers, 注意：combineReducers方法传入的对象就是redux保存的总的状态对象
export default combineReducers({
    counter: countReducer,
    persons: PersonReducer
})