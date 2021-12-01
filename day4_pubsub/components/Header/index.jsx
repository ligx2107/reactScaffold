import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';

import './index.css';

export default class Header extends Component {

    search = ()=>{
        //连续解构赋值，只定义value变量
        const {nameElement:{value}} = this;
        console.log(`value: ${value}`)

        //连续解构赋值且将变量重命名 value -> nameStr
        // const {nameElement:{value:nameStr}} = this;
        // console.log(`nameStr: ${nameStr}`)

        //调用查询接口之前，发布消息更新List状态isLoading=true,isFirstShow=false
        PubSub.publish('userInfo', {isFirstShow:false, isLoading:true});


        //向服务本身发请求，协议//域名:端口 可省略
        axios.get(`/api1/search/users?q=${value}`).then(
            response => {
                //请求成功，将接口返回数据传递给List组件并更新响应状态属性
                PubSub.publish('userInfo', {isFirstShow:false, isLoading:false, users: response.data.items});
            },
            error => {
                //请求失败，将异常信息返回给List组件
                PubSub.publish('userInfo', {isFirstShow:false, isLoading:false, errInfo: error.message});
            }
        );
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Users</h3>
                <div>
                    <input ref={c => this.nameElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}