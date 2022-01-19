import React, { Component } from 'react'

import SetStateDemo from './components/setState';
import LazyLoadDemo from './components/lazyLoad';
import HookDemo from './components/hooks';
import FragmentDemo from './components/fragment';
import ContextDemo from './components/context';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <SetStateDemo p={2}/> */}
                {/* <LazyLoadDemo /> */}
                {/* <HookDemo /> */}
                {/* <FragmentDemo /> */}
                <ContextDemo />
            </div>
        )
    }
}
