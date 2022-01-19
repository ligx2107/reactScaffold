import React, { Component } from 'react'

import Demo from './components/setStateDemo';

export default class App extends Component {
    render() {
        return (
            <div>
                <Demo p={2}/>
            </div>
        )
    }
}
