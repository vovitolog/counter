import React, {useState} from 'react';
import './App.css';
import {TestCounter} from "./components/TestCounter";
import {Button} from "./components/Button/Button";
import classes from "./components/Button/Button.module.css";
import {InputValue} from "./components/InputValue/InputValue";

function App() {
    const [count, setCount] = useState(0);
    const [maxValue, setMaxValue] = useState('0');
    const [startValue, setStartValue] = useState('0');

    const onChangeValue = (value: string) => {
        //  setMaxValue(value);
        console.log(value + '  test')
    }

    const onChangeMaxValue = (value: string) => {
        setMaxValue(value);
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
        setCount(0);
    }

    const onClickHandler = () => {
        console.log('set');
    }
    return (
        <div className="App">
            <div className={'container-wrapper'}>
                <div className={'input-wrapper'}>
                    <InputValue description={'max value: '} currentValue={maxValue} onChangeValue={onChangeMaxValue}/>
                    <InputValue description={'start value: '} currentValue={startValue} onChangeValue={onChangeStartValue}/>
                </div>
                <div className={'button-wrapper'}>
                    <Button name={'set'} handler={onClickHandler} disabled={false}></Button>
                </div>
            </div>
            <div className={'container-wrapper'}>
                <div className={'number'}>{count}</div>
                <div className={'button-wrapper'}>
                    <Button name={'inc'} handler={incHandler} disabled={count === 5}></Button>
                    <Button name={'reset'} handler={resetHandler} disabled={false}></Button>
                    {/*<button disabled={false} className={classes.button}>test</button>*/}
                </div>
            </div>

            {/*<TestCounter/>*/}

            {/*<div>*/}
            {/*    {count}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button*/}
            {/*        onClick={incHandler}*/}
            {/*        disabled={count === 5}*/}
            {/*    >INC*/}
            {/*    </button>*/}
            {/*    <button*/}
            {/*        onClick={resetHandler}*/}
            {/*        disabled={count !== 5}*/}
            {/*    >RESET*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
