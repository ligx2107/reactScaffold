import React, { Component } from 'react'

import SetStateDemo from './components/setState';
import LazyLoadDemo from './components/lazyLoad';
import HookDemo from './components/hooks';
import FragmentDemo from './components/fragment';
import ContextDemo from './components/context';
import OptimizeDemo from './components/optimize';
import RenderPropsDemo from './components/renderProps';
import ErrorBoundaryDemo from './components/errorBoundary/Parent';
import MemoDemo from './components/memo';
import ForwardRefDemo from './components/forwardRef';
import HOCDemo from './components/forwardRef/hoc';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <SetStateDemo p={2}/> */}
                {/* <LazyLoadDemo /> */}
                {/* <HookDemo /> */}
                {/* <FragmentDemo /> */}
                {/* <ContextDemo /> */}
                {/* <OptimizeDemo /> */}
                {/* <RenderPropsDemo /> */}
                {/* <ErrorBoundaryDemo /> */}
                {/* <MemoDemo /> */}
                {/* <ForwardRefDemo /> */}
                <HOCDemo />
            </div>
        )
    }
}
