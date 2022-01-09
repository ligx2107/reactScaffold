/**
 * 该文件用于创建一个为Counter组件服务的reducer，reducer本质上是一个函数
 * reducer函数接受两个参数，分别为：之前的状态(preState)和动作对象(action)
 */

//引入定义的常量
import {INCREMENT, DECREMENT} from '../constant';

const initState = 0
export default function countReducer(preState=initState, action){
    //从action对象中获取操作类型及操作数
    const {type, data} = action;
    //根据类型type决定如何处理数据
    switch (type) {
        case INCREMENT: //加操作
            return preState + data;
        case DECREMENT: //减操作
            return preState - data;
        default: //没有具体操作，则为reducer的初始化操作
            return preState;
    }
}