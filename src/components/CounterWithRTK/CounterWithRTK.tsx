import {InputValue} from "../InputValue/InputValue";
import {Button} from "../Button/Button";
import {CounterValue} from "../CounterValue/CounterValue";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {ERROR_MESSAGE, VALID_MESSAGE} from "../../constants/constants";
import {counterSlice} from "../../features/counter/counterSlice";

export const CounterWithRTK = () => {

    const [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(false);
    const [isIncButtonDisabled, setIsIncButtonDisabled] = useState<boolean>(false);
    const [isResetButtonDisabled, setIsResetButtonDisabled] = useState<boolean>(false);
    const [isMaximumCounterValueReached, setIsMaximumCounterValueReached] = useState<boolean>(false);

    // const initialState = {
    //     startValue: localStorage.getItem('startValue') || '0',
    //     maxValue: localStorage.getItem('maxValue') || '0',
    //     counterValue: localStorage.getItem('startValue') || '0',
    //     error: false,
    // }

    // const [state, setState] = useState(initialState);

    const count = useSelector((state: RootState) => state.counter.value);
    const error = useSelector((state: RootState) => state.counter.error);
    const maxValue = useSelector((state: RootState) => state.counter.maxValue);
    const startValue = useSelector((state: RootState) => state.counter.startValue);
    console.log(error)
    const dispatch = useDispatch()

    const onChangeMaxValue = (value: string) => {
        setIsIncButtonDisabled(true);
        setIsResetButtonDisabled(true);
        if (Number(value) <= Number(count)) {
            setIsSetButtonDisabled(true)
            // setState({...state, maxValue: value, counterValue: ERROR_MESSAGE, error: true})
            dispatch(counterSlice.actions.setError)
            dispatch(counterSlice.actions.increment)
        } else {
            // setState({...state, maxValue: value, counterValue: VALID_MESSAGE, error: false})
            dispatch(counterSlice.actions.unSetError())
            setIsSetButtonDisabled(false)
        }
    }

    const onChangeStartValue = (value: string) => {
        setIsIncButtonDisabled(true);
        setIsResetButtonDisabled(true);
        if (Number(value) >= Number(maxValue) || Number(value) < 0) {
            setIsSetButtonDisabled(true)
         //   setState({...state, startValue: value, counterValue: ERROR_MESSAGE, error: true})
        } else {
      //      setState({...state, startValue: value, counterValue: VALID_MESSAGE, error: false})
            setIsSetButtonDisabled(false)
        }
    }

    // const incHandler = () => {
    //     setState({...state, counterValue: (Number(state.counterValue) + 1).toString(10)});
    // }

    const incHandler = () => {
        dispatch(counterSlice.actions.increment())
    }
    const resetHandler = () => {
       dispatch(counterSlice.actions.reset())
    }

    const setHandler = () => {
      //  setState({...state, counterValue: state.startValue})
        // localStorage.setItem('startValue', state.startValue);
        // localStorage.setItem('maxValue', state.maxValue);
        setIsSetButtonDisabled(true);
        setIsIncButtonDisabled(false);
        setIsResetButtonDisabled(false);
    }

// Смена класса номера при вводе
    useEffect(() => {
        if (Number(count) === Number(maxValue)) {
            setIsMaximumCounterValueReached(true);
        } else setIsMaximumCounterValueReached(false);
    }, [count, maxValue])

    return (
        <>
            <div className={'container-wrapper'}>
                <div className={'input-wrapper'}>
                    <InputValue description={'max value: '} currentValue={maxValue}
                                onChangeValue={onChangeMaxValue}
                                error={error}
                    />
                    <InputValue description={'start value: '} currentValue={startValue}
                                onChangeValue={onChangeStartValue}
                                error={error}
                    />
                </div>
                <div className={'button-wrapper'}>
                    <Button name={'set'} handler={setHandler} disabled={isSetButtonDisabled}></Button>
                </div>
            </div>
            <div className={'container-wrapper'}>
                <CounterValue value={count}
                              maximumReached={isMaximumCounterValueReached}
                              error={error}
                />
                <div className={'button-wrapper'}>
                    <Button name={'inc'} handler={incHandler}
                            disabled={isMaximumCounterValueReached || isIncButtonDisabled}></Button>
                    <Button name={'reset'} handler={resetHandler} disabled={isResetButtonDisabled}></Button>
                </div>
            </div>
        </>
    )
}
