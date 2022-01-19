import React, { Component, Fragment } from 'react'

export default class FragmentDemo extends Component {
    render() {
        return (
            // 以Fragment标签代替div标签，React在解析时会丢弃Fragment标签，从而减少渲染后的DOM节点层级
            <Fragment>
                <input type="text" />
                <input type="text" />
            </Fragment>
        )
    }
}
