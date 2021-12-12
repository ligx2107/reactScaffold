import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom';
import Detail from './Detail';

export default class Messages extends Component {

    state = {
      messages: [
        {id:"001", title:"message001"},
        {id:"002", title:"message002"},
        {id:"003", title:"message003"}
      ]
    };

    // push方式查看
    pushShow = (id, title) => {
      // push + params
      // this.props.history.push(`/home/message/detail/${id}/${title}`);

      // push + search
      // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

      // push + state
      this.props.history.push('/home/message/detail', {id:id, title: title});
    }

    // replace方式查看
    replaceShow = (id, title) => {
      // replace + params
      // this.props.history.replace(`/home/message/detail/${id}/${title}`);

      // replace + search
      // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

      // replace + state
      this.props.history.replace('/home/message/detail', {id:id, title: title});
    }

    render() {
        const {messages} = this.state;

        return (
            <div>
                <ul>
                    {
                        messages.map((messageObj) => {
                          return (
                            <li key={messageObj.id}>
                              {/* 此处导航没有高亮显示效果，使用Link组件即可 
                                  路由传递参数方式：
                                  1. 向路由组件传递params参数
                                  2. 向路由组件传递search参数
                                  3. 向路由组件传递state参数(地址栏内不可见)
                              */}
                              {/* param参数：<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}
                              {/* search参数：<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}
                              <Link to={{pathname: '/home/message/detail', state: {id:messageObj.id, title: messageObj.title}}}>{messageObj.title}</Link>
                              &nbsp;<button onClick={() => this.pushShow(messageObj.id, messageObj.title)}>push查看</button>
                              &nbsp;<button onClick={() => this.replaceShow(messageObj.id, messageObj.title)}>replace查看</button>
                            </li>
                          );
                        })
                    }
                  </ul>
                  {/* 注册组件 
                      路由传递参数方式：
                      1. 通过向路由组件传递params参数，注册路由时声明接收参数
                      2. 通过向路由组件传递search参数，无需声明接受参数，正常注册组件即可
                  */}
                  {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
                  <Route path="/home/message/detail" component={Detail} />
            </div>
        )
    }
}
