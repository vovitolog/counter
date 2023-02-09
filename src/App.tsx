import React, {useEffect, useState} from 'react';
import './App.css';
import {TestCounter} from "./components/TestCounter";
import {Button} from "./components/Button/Button";
import classes from "./components/Button/Button.module.css";
import {InputValue} from "./components/InputValue/InputValue";
import {CounterValue} from "./components/CounterValue/CounterValue";

function App(this: any) {
    const ERROR_MESSAGE = 'Incorrect value!';
    const VALID_MESSAGE = 'Enter values end press "set"';

   // const [maxValue, setMaxValue] = useState(localStorage.getItem('maxValue') || '0');
  //  const [startValue, setStartValue] = useState(localStorage.getItem('startValue') || '0');
    //const [count, setCount] = useState(Number(startValue));
    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(false);
    const [isMaximumCounterValueReached, setIsMaximumCounterValueReached] = useState<boolean>(false);
    //const [isValueSet, setIsValueSet] = useState(true);
    const [error, setError] = useState(false);

    const initialState = {
        startValue: localStorage.getItem('startValue') || '0',
        maxValue: localStorage.getItem('maxValue') || '0',
        counterValue: Number(localStorage.getItem('startValue') || '0'),
        error: false,
    }

    const [state, setState] = useState(initialState);
    console.log(state);

    // проверка корректности введённых значений
    // const checkIsValuesCorrect = () => {
    //     if (Number(startValue) >= Number(maxValue)) return false;
    //     if (Number(startValue) < 0) return false;
    //     if (Number(maxValue) < 1) return false;
    //     if (Number(maxValue) === Number(startValue)) return false;
    //     return true;
    // }

    const onChangeMaxValue = (value: string) => {
        // setError(!checkIsValuesCorrect());
        // if (error) {
          //  setIsSetButtonDisabled(true)
        // }
        // ;
        // if (!error) {
           setIsSetButtonDisabled(false)
        // }
        // ;


        //    setMaxValue(value);

        setState({...state, maxValue: value})
    }

    const onChangeStartValue = (value: string) => {
        // console.log(startValue + ' Start');
        // setIsValueSet(false);
        // if (error) {
        //     setIsSetButtonDisabled(true)
        // }
        // ;
        // if (!error) {
            setIsSetButtonDisabled(false)
        // }
        // ;
        setState({...state, startValue: value})
    }

    const incHandler = () => {
        console.log(state.counterValue);
        //setCount(count + 1);
        setState({...state, counterValue: state.counterValue + 1});
    }
    const resetHandler = () => {
        //  setCount(Number(startValue));
        setState({...state, counterValue: Number(state.startValue)})
    }

    const setHandler = () => {
       // setCount(Number(state.startValue));
        setState({...state, counterValue: Number(state.startValue)})
        localStorage.setItem('startValue', state.startValue);
        localStorage.setItem('maxValue', state.maxValue);
        setIsSetButtonDisabled(true);
        // setIsValueSet(true);
    }

    // Смена класса номера при вводе
    useEffect(() => {
        if (state.counterValue === Number(state.maxValue)) {
            setIsMaximumCounterValueReached(true);
        } else setIsMaximumCounterValueReached(false);
    }, [state.counterValue])


    return (
        <div className="App">
            <div className={'container-wrapper'}>
                <div className={'input-wrapper'}>
                    <InputValue description={'max value: '} currentValue={state.maxValue}
                                onChangeValue={onChangeMaxValue}/>
                    <InputValue description={'start value: '} currentValue={state.startValue}
                                onChangeValue={onChangeStartValue}/>
                </div>
                <div className={'button-wrapper'}>
                    <Button name={'set'} handler={setHandler} disabled={isSetButtonDisabled}></Button>
                </div>
            </div>
            <div className={'container-wrapper'}>
                {/*<div className={'number'}>{count}</div>*/}
                {//isValueSet ?
                    <CounterValue value={state.counterValue.toString(10)}
                                  maximumReached={isMaximumCounterValueReached}/>

                    // <CounterValue value={VALID_MESSAGE} maximumReached={isMaximumCounterValueReached}/>
                }

                <div className={'button-wrapper'}>
                    <Button name={'inc'} handler={incHandler}
                            disabled={state.counterValue === Number(state.maxValue)}></Button>
                    <Button name={'reset'} handler={resetHandler} disabled={false}></Button>
                </div>
            </div>
        </div>
    );
}

export default App;
