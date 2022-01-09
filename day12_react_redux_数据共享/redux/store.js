/**
 * 该文件用于创建并暴露一个store对象，整个应用只用一个store对象
 */

//引入createStore，用于创建redux中最为核心的store对象
//引入applyMiddleware，用于使用redux-thunk
import {createStore, applyMiddleware, combineReducers} from 'redux';
//引入为Counter组件服务的reducer
import countReducer from './reducers/count';

//引入为Person组件服务的reducer
import PersonReducer from './reducers/person';

//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

//整合reducers, 注意：combineReducers方法传入的对象就是redux保存的总的状态对象
const reducers = combineReducers({
    counter: countReducer,
    persons: PersonReducer
})

//暴露store
export default createStore(reducers, applyMiddleware(thunk));