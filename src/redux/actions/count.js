/**
 * 该文件为Counter组件创建Action对象
 * 同步action：action的值为Object类型的一般对象
 * 异步action：action的值为函数
 */
//引入定义的常量
import {INCREMENT, DECREMENT} from '../constant';

//创建加操作的action对象
export const createIncrementAction = data => ({type:INCREMENT, data});
//创建减操作的action对象
export const createDecrementAction = data => ({type:DECREMENT, data});

//创建异步操作action对象，异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            //通知redux计算
            dispatch(createIncrementAction(data));
        }, time);
    }
}