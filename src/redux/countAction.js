/**
 * 该文件为Counter组件创建Action对象
 */
//引入定义的常量
import {INCREMENT, DECREMENT} from './constant';

//创建加操作的action对象
export const createIncrementAction = data => ({type:INCREMENT, data});
//创建减操作的action对象
export const createDecrementAction = data => ({type:DECREMENT, data});