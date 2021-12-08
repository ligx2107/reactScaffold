import React, { Component } from 'react'
// import qs from 'querystring';

const detailData = [
    {id:"001", content:"001_content"},
    {id:"002", content:"002_content"},
    {id:"003", content:"003_content"}
];


export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数，保存在this.props.match.params结构内
        // const {id, title} = this.props.match.params;

        // 接收search参数，保存在this.props.location.search属性上，结构为key1=value1&key2=value2类型，可使用querystring类库进行处理
        // const {search} = this.props.location;
        // const {id, title} = qs.parse(search.slice(1));

        // 接收state参数，保存在this.props.location.state属性上
        const {id, title} = this.props.location.state;

        const findResult = detailData.find( detail => {return detail.id === id});
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>ID:{findResult.content}</li>
                </ul>
            </div>
        )
    }
}
