import React, { Component } from 'react'

export default class List extends Component {
    render() {

        // 获取父组件传递的用户数据
        const {users,isFirstShow,isLoading,errInfo} = this.props

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
