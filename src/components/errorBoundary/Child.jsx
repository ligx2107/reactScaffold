import React, { Component } from 'react';
import './index.css';

export default class Child extends Component {

    state = {
        users:[
            {id:'001',name:'tom',age:18},
            {id:'002',name:'jack',age:19},
            {id:'003',name:'david',age:17},
        ]
    };

    render() {
        return (
            <div className='child'>
                <h2>我是Child组件</h2>
                <ul>
                    {
                        this.state.users.map((user)=>{
                            return <li key={user.id}>name:{user.name}, age:{user.age}</li>
                        })
                    }
                </ul>
                {'test'.map()}
            </div>
        );
    }
}