import React, {useState} from 'react';
import './App.css';
import {TestCounter} from "./components/TestCounter";
import {Button} from "./components/Button/Button";
import classes from "./components/Button/Button.module.css";
import {InputValue} from "./components/InputValue/InputValue";

function App() {
    const [maxValue, setMaxValue] = useState(localStorage.getItem('maxValue') || '0');
    const [startValue, setStartValue] = useState(localStorage.getItem('startValue') || '0');
    const [count, setCount] = useState(Number(startValue));

    const onChangeValue = (value: string) => {
        //  setMaxValue(value);
    }

    const onChangeMaxValue = (value: string) => {
        setMaxValue(value);
        console.log(value + '  test')
        console.log(maxValue + ' Max');
    }

    const onChangeStartValue = (value: string) => {
        setStartValue(value);
        console.log(startValue + ' Start');
    }

    const incHandler = () => {
        setCount(count + 1);
    }
    const resetHandler = () => {
        setCount(Number(startValue));
    }

    const setHandler = () => {
        console.log('set');
        setCount(Number(startValue));
        localStorage.setItem('startValue', startValue);
        localStorage.setItem('maxValue', maxValue);
    }
    return (
        <div className="App">
            <div className={'container-wrapper'}>
                <div className={'input-wrapper'}>
                    <InputValue description={'max value: '} currentValue={maxValue} onChangeValue={onChangeMaxValue}/>
                    <InputValue description={'start value: '} currentValue={startValue}
                                onChangeValue={onChangeStartValue}/>
                </div>
                <div className={'button-wrapper'}>
                    <Button name={'set'} handler={setHandler} disabled={false}></Button>
                </div>
            </div>
            <div className={'container-wrapper'}>
                <div className={'number'}>{count}</div>
                <div className={'button-wrapper'}>
                    <Button name={'inc'} handler={incHandler} disabled={count === Number(maxValue)}></Button>
                    <Button name={'reset'} handler={resetHandler} disabled={false}></Button>
                </div>
            </div>
        </div>
    );
}

export default App;
