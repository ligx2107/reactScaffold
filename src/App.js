//创建外壳组件
import React,{Component} from 'react';
import axios from 'axios';

//创建并暴露组件
export default class App extends Component {

    getStudents = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('获取学生信息成功', response.data)},
            error => {console.log('获取学生信息失败', error)}
        );
    }

    render(){
        return (
            <div>
                <button onClick={this.getStudents}>获取学生信息</button>
            </div>
        );
    }
}