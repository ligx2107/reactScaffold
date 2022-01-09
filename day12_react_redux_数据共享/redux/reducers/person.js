import {ADD_PERSON} from '../constant';

const initState = [{id: '001', name:'mark',age:24}]

/** 
 * redux的reducer函数必须是一个纯函数
 * 纯函数：一个特别的函数，只要是同样的输入，必定得到同样的输出，需遵守以下约束
 * 1. 不得改写参数数据
 * 2. 不会产生任何副作用，例如网络请求，输入和输出设备等
 * 3. 不能调用Date.now或者Math.random等不纯的方法
 * 
*/
export default function personReducer(preState=initState, action){
    const{type,data} = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
}