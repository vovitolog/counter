import React, {useEffect, useState} from 'react';
import './App.css';
import {TestCounter} from "./components/TestCounter";
import {Button} from "./components/Button/Button";
import classes from "./components/Button/Button.module.css";
import {InputValue} from "./components/InputValue/InputValue";
 import {CounterValue} from "./components/CounterValue/CounterValue";

function App() {
    const ERROR_MESSAGE = 'Incorrect value!';
    const VALID_MESSAGE = 'Enter values end press "set"';

    const [maxValue, setMaxValue] = useState(localStorage.getItem('maxValue') || '0');
    const [startValue, setStartValue] = useState(localStorage.getItem('startValue') || '0');
    const [count, setCount] = useState(Number(startValue));
    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(true);
    const [isMaximumCounterValueReached, setIsMaximumCounterValueReached] = useState<boolean>(false);

    const onChangeValue = (value: string) => {
        //  setMaxValue(value);
    }

    const onChangeMaxValue = (value: string) => {
        setIsSetButtonDisabled(false);
        setMaxValue(value);
        // console.log(value + '  test')
        // console.log(maxValue + ' Max');
    }

    const onChangeStartValue = (value: string) => {
        setIsSetButtonDisabled(false);
        setStartValue(value);
        // console.log(startValue + ' Start');
    }

    const incHandler = () => {
       // checkMaximumValueReached();
        setCount(count + 1);
    }
    const resetHandler = () => {
        setCount(Number(startValue));
    }

    const setHandler = () => {
        // console.log('set')
        setCount(Number(startValue));
        localStorage.setItem('startValue', startValue);
        localStorage.setItem('maxValue', maxValue);
        setIsSetButtonDisabled(true);
    }

    // const checkMaximumValueReached = () => {
    //     if (count === Number(maxValue)) {
    //         setIsMaximumCounterValueReached(true);
    //         console.log('ttttttttttttt')
    //     }
    // }

    useEffect(()=>{
        if (count === Number(maxValue)) {
            setIsMaximumCounterValueReached(true);
            console.log('ttttttttttttt')
        } else  setIsMaximumCounterValueReached(false);
    }, [count])

    return (
        <div className="App">
            <div className={'container-wrapper'}>
                <div className={'input-wrapper'}>
                    <InputValue description={'max value: '} currentValue={maxValue} onChangeValue={onChangeMaxValue}/>
                    <InputValue description={'start value: '} currentValue={startValue}
                                onChangeValue={onChangeStartValue}/>
                </div>
                <div className={'button-wrapper'}>
                    <Button name={'set'} handler={setHandler} disabled={isSetButtonDisabled}></Button>
                </div>
            </div>
            <div className={'container-wrapper'}>
                {/*<div className={'number'}>{count}</div>*/}
                <CounterValue value={count.toString(10)} maximumReached={isMaximumCounterValueReached}/>
                <div className={'button-wrapper'}>
                    <Button name={'inc'} handler={incHandler} disabled={count === Number(maxValue)}></Button>
                    <Button name={'reset'} handler={resetHandler} disabled={false}></Button>
                </div>
            </div>
        </div>
    );
}

export default App;
