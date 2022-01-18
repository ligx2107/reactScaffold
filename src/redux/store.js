/**
 * 该文件用于创建并暴露一个store对象，整个应用只用一个store对象
 */

//引入createStore，用于创建redux中最为核心的store对象
//引入applyMiddleware，用于使用redux-thunk
import {createStore, applyMiddleware} from 'redux';
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension';
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';
//引入reducer
import reducer from '../redux/reducers';

//暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));