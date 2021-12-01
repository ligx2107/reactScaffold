import React, { Component } from 'react'
import PubSub from 'pubsub-js';

export default class List extends Component {

    //初始化
    state = {
        users:[], //用户数据
        isFirstShow: true, //是否第一次展示
        isLoading: false, //是否正在加载
        errInfo: '' //异常信息 
    };

    //完成挂载钩子函数，订阅消息
    componentDidMount(){
        this.subToken = PubSub.subscribe('userInfo', (_, stateObj) => {
            this.setState(stateObj);
        });
    }

    //组件卸载钩子函数，取消消息订阅
    componentWillUnmount(){
        PubSub.unsubscribe(this.subToken);
    }

    render() {
        // 获取父组件传递的用户数据
        const {users,isFirstShow,isLoading,errInfo} = this.state

        return (
            <div className="row">
                {
                    isFirstShow ? '请输入名称' : 
                    isLoading ? '正在查询...' : 
                    errInfo ? errInfo : 
                    users.map(userObj => {
                        return (
                            <div className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                <img alt="" src={userObj.avatar_url} style={{width:'100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
