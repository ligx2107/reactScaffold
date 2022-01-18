import React, { Component } from 'react';

import {addPerson} from '../../redux/actions/person';

import {connect} from 'react-redux';

import {nanoid} from 'nanoid';

class Person extends Component {

    addPerson = () => {
        //获取名字及年龄数据
        const personName = this.personName.value;
        const personAge = this.personAge.value;

        //构建新对象
        const newPerson = {id:nanoid(), name:personName, age: personAge};

        //调用添加人的方法
        this.props.addPerson(newPerson);

        //清空数据
        this.personName.value = '';
        this.personAge.value = '';
    }

    render() {
        return (
            <div>
                <h1>上面组件的值为：{this.props.counter}</h1>
                <input type="text" placeholder="请输入姓名" ref={n => this.personName = n}/>&nbsp;
                <input type="text" placeholder="请输入年龄" ref={a => this.personAge = a}/>&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map(person => {
                            return <li key={person.id}>{person.name} -- {person.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({persons: state.persons, counter: state.counter}),
    {
        addPerson
    }
)(Person);