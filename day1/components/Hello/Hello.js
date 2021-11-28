import React,{Component} from 'react';
/**
 * css模块化
 * 1. css文件名称以***.module.css结尾
 * 2. css文件的引入以import ** from **的方式，使用指定对象接收指定的css
 */
import HC from './Hello.module.css';
export default class Hello extends Component {
    render(){
        return (
            <h2 className={HC.title}>Hello React</h2>
        );
    }
}