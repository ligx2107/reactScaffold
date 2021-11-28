//创建外壳组件
import React,{Component} from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
// import Hello from './components/Hello/Hello';
// import Welcom from './components/Welcom';

import './App.css';

//创建并暴露组件
export default class App extends Component {
    //state定义在哪里，操作state的方法就在哪里

    //初始化state
    state = {todos: [
        {id:'001', name:'吃饭', done:true},
        {id:'002', name:'睡觉', done:false},
        {id:'003', name:'学习', done:false}
    ]};

    //自定义接收新todo对象方法
    receiveNewTodo = (value) => {
        const {todos} = this.state;
        this.setState({todos: [{id:'00'+(todos.length+1),name:value,done:false}, ...todos]});
    }

    //自定义勾选操作回调处理方法
    handleCheck = (id, checkedFlag) => {
        const {todos} = this.state;
        const newTodos = todos.map(item => {
            if(item.id === id){
                return {...item, done:checkedFlag}
            }else{
                return item
            }
        });
        this.setState({todos:newTodos});
    }

    //自定义todo删除方法
    deleteTodo = (id) => {
        const {todos} = this.state;
        this.setState({todos: todos.filter(item => item.id !== id)});
    }

    //自定义全选操作
    checkAll = (checkedFlag) => {
        const {todos} = this.state;
        this.setState({todos: todos.map(item => {return {...item, done:checkedFlag}})});
    }

    //清除所有已选todo
    clearAllDone = () => {
        const {todos} = this.state;
        this.setState({todos: todos.filter(item => !item.done)});
    }


    render(){
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header  receiveNewTodo={this.receiveNewTodo}/>
                    <List todos={todos} handleCheck={this.handleCheck} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}