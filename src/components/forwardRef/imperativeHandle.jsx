import React, {useRef, useImperativeHandle, forwardRef, useEffect} from 'react';

//useImperativeHandle，在使用ref时自定义暴露给父组件的实例，应与forwardRef组合使用
function Input(props, ref){
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log('focus called...')
            inputRef.current.focus();
        },
        testMethod: function(){
            console.log('testMethod called...');
        }
    }))
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default function(props){
    const inRef = useRef();
    const InputWrapper = forwardRef(Input);

    useEffect(() => {
        inRef.current.focus();
        inRef.current.testMethod();
    }, [])

    return (
        <div>
            <InputWrapper ref={inRef} />
        </div>
    );
}