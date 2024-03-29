import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button/Button";
import {InputValue} from "./components/InputValue/InputValue";
import {CounterValue} from "./components/CounterValue/CounterValue";

function App(this: any) {
    const ERROR_MESSAGE = 'Incorrect value!';
    const VALID_MESSAGE = 'Enter values end press "set"';

    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(false);
    const [isIncButtonDisabled, setIsIncButtonDisabled] = useState<boolean>(false);
    const [isResetButtonDisabled, setIsResetButtonDisabled] = useState<boolean>(false);
    const [isMaximumCounterValueReached, setIsMaximumCounterValueReached] = useState<boolean>(false);

    const initialState = {
        startValue: localStorage.getItem('startValue') || '0',
        maxValue: localStorage.getItem('maxValue') || '0',
        counterValue: localStorage.getItem('startValue') || '0',
        error: false,
    }

    const [state, setState] = useState(initialState);

    const onChangeMaxValue = (value: string) => {
        setIsIncButtonDisabled(true);
        setIsResetButtonDisabled(true);
        if (Number(value) <= Number(state.startValue)) {
            setIsSetButtonDisabled(true)
            setState({...state, maxValue: value, counterValue: ERROR_MESSAGE, error: true})
        } else {
            setState({...state, maxValue: value, counterValue: VALID_MESSAGE, error: false})
            setIsSetButtonDisabled(false)
        }
    }
    console.log(state)

    const onChangeStartValue = (value: string) => {
        setIsIncButtonDisabled(true);
        setIsResetButtonDisabled(true);
        if (Number(value) >= Number(state.maxValue) || Number(value) < 0) {
            setIsSetButtonDisabled(true)
            setState({...state, startValue: value, counterValue: ERROR_MESSAGE, error: true})
        } else {
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
        setIsIncButtonDisabled(false);
        setIsResetButtonDisabled(false);
    }

    // Смена класса номера при вводе
    useEffect(() => {
        if (Number(state.counterValue) === Number(state.maxValue)) {
            setIsMaximumCounterValueReached(true);
        } else setIsMaximumCounterValueReached(false);
    }, [state.counterValue, state.maxValue])

    return (
        <div className="App">
            <div className={'container-wrapper'}>
                <div className={'input-wrapper'}>
                    <InputValue description={'max value: '} currentValue={state.maxValue}
                                onChangeValue={onChangeMaxValue}
                                error={state.error}
                    />
                    <InputValue description={'start value: '} currentValue={state.startValue}
                                onChangeValue={onChangeStartValue}
                                error={state.error}
                    />
                </div>
                <div className={'button-wrapper'}>
                    <Button name={'set'} handler={setHandler} disabled={isSetButtonDisabled}></Button>
                </div>
            </div>
            <div className={'container-wrapper'}>
                <CounterValue value={state.counterValue}
                              maximumReached={isMaximumCounterValueReached}
                              error={state.error}
                />
                <div className={'button-wrapper'}>
                    <Button name={'inc'} handler={incHandler}
                            disabled={isMaximumCounterValueReached || isIncButtonDisabled}></Button>
                    <Button name={'reset'} handler={resetHandler} disabled={isResetButtonDisabled}></Button>
                </div>
            </div>
        </div>
    );
}

export default App;
