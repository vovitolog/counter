import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {InputValue} from "./components/InputValue/InputValue";
import {CounterValue} from "./components/CounterValue/CounterValue";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function App(this: any) {
    const ERROR_MESSAGE = 'Incorrect value!';
    const VALID_MESSAGE = 'Enter values end press "set"';

    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(false);
    const [isMaximumCounterValueReached, setIsMaximumCounterValueReached] = useState<boolean>(false);

    const initialState = {
        startValue: localStorage.getItem('startValue') || '0',
        maxValue: localStorage.getItem('maxValue') || '0',
        counterValue: localStorage.getItem('startValue') || '0',
        error: false,
    }

    const [state, setState] = useState(initialState);

    // проверка корректности введённых значений
    // const checkIsValuesCorrect = () => {
    //     if (Number(state.startValue) >= Number(state.maxValue)) return false;
    //     if (Number(state.startValue) < 0) return false;
    //     if (Number(state.maxValue) < 1) return false;
    //     if (Number(state.maxValue) === Number(state.startValue)) return false;
    //     return true;
    // }

    const onChangeMaxValue = (value: string) => {
        if (Number(value) <= Number(state.startValue)) {
            console.log('SHANTUNG');
            setIsSetButtonDisabled(true)
            setState({...state, maxValue: value, counterValue: ERROR_MESSAGE, error: true})
        } else {
            console.log('NE SHANTUNG')
            setState({...state, maxValue: value, counterValue: VALID_MESSAGE, error: false})
            setIsSetButtonDisabled(false)
        }
    }

    const onChangeStartValue = (value: string) => {
        if (Number(value) >= Number(state.maxValue) || Number(value) < 0) {
            console.log('SHANTUNG');
            setIsSetButtonDisabled(true)
            setState({...state, startValue: value, counterValue: ERROR_MESSAGE, error: true})
        } else {
            console.log('NE SHANTUNG')
            setState({...state, startValue: value, counterValue: VALID_MESSAGE, error: false})
            setIsSetButtonDisabled(false)
        }
    }

    const incHandler = () => {
        setState({...state, counterValue: (Number(state.counterValue) + 1).toString(10)});
    }
    const resetHandler = () => {
        setState({...state, counterValue: state.startValue})
    }

    const setHandler = () => {
        setState({...state, counterValue: state.startValue})
        localStorage.setItem('startValue', state.startValue);
        localStorage.setItem('maxValue', state.maxValue);
        setIsSetButtonDisabled(true);
    }

    // Смена класса номера при вводе
    useEffect(() => {
        if (Number(state.counterValue) === Number(state.maxValue)) {
            setIsMaximumCounterValueReached(true);
        } else setIsMaximumCounterValueReached(false);
    }, [state.counterValue])

    // useEffect(() => {
    //     // рабочая смена сообщений
    //     // if (checkIsValuesCorrect()) {
    //     //     setState({...state, counterValue: VALID_MESSAGE})
    //     // } else setState({...state, counterValue: ERROR_MESSAGE})
    // }, [state.startValue, state.counterValue, state.error])


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
                    <CounterValue value={state.counterValue}
                                  maximumReached={isMaximumCounterValueReached}
                                  error={state.error}
                    />

                    // <CounterValue value={VALID_MESSAGE} maximumReached={isMaximumCounterValueReached}/>
                }

                <div className={'button-wrapper'}>
                    <Button name={'inc'} handler={incHandler}
                            disabled={Number(state.counterValue) === Number(state.maxValue)}></Button>
                    <Button name={'reset'} handler={resetHandler} disabled={false}></Button>
                </div>
            </div>
        </div>
    );
}

export default App;
