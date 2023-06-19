import './App.css';
import {Button} from "./components/Button/Button";
import {InputValue} from "./components/InputValue/InputValue";
import {CounterValue} from "./components/CounterValue/CounterValue";
import {ERROR_MESSAGE, VALID_MESSAGE} from "./constants/constants";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {Counter} from './components/Counter/Counter';
import React from "react";
import {CounterWithRTK} from "./components/CounterWithRTK/CounterWithRTK";

function App() {
    //
    // const [isSetButtonDisabled, setIsSetButtonDisabled] = useState<boolean>(false);
    // const [isIncButtonDisabled, setIsIncButtonDisabled] = useState<boolean>(false);
    // const [isResetButtonDisabled, setIsResetButtonDisabled] = useState<boolean>(false);
    // const [isMaximumCounterValueReached, setIsMaximumCounterValueReached] = useState<boolean>(false);
    //
    // const initialState = {
    //     startValue: localStorage.getItem('startValue') || '0',
    //     maxValue: localStorage.getItem('maxValue') || '0',
    //     counterValue: localStorage.getItem('startValue') || '0',
    //     error: false,
    // }
    //
    // const [state, setState] = useState(initialState);
    //
    // const count = useSelector((state: RootState) => state.counter.value)
    // const dispatch = useDispatch()
    //
    // const onChangeMaxValue = (value: string) => {
    //     setIsIncButtonDisabled(true);
    //     setIsResetButtonDisabled(true);
    //     if (Number(value) <= Number(state.startValue)) {
    //         setIsSetButtonDisabled(true)
    //         setState({...state, maxValue: value, counterValue: ERROR_MESSAGE, error: true})
    //     } else {
    //         setState({...state, maxValue: value, counterValue: VALID_MESSAGE, error: false})
    //         setIsSetButtonDisabled(false)
    //     }
    // }
    //
    // const onChangeStartValue = (value: string) => {
    //     setIsIncButtonDisabled(true);
    //     setIsResetButtonDisabled(true);
    //     if (Number(value) >= Number(state.maxValue) || Number(value) < 0) {
    //         setIsSetButtonDisabled(true)
    //         setState({...state, startValue: value, counterValue: ERROR_MESSAGE, error: true})
    //     } else {
    //         setState({...state, startValue: value, counterValue: VALID_MESSAGE, error: false})
    //         setIsSetButtonDisabled(false)
    //     }
    // }
    //
    // const incHandler = () => {
    //     setState({...state, counterValue: (Number(state.counterValue) + 1).toString(10)});
    // }
    // const resetHandler = () => {
    //     setState({...state, counterValue: state.startValue})
    // }
    //
    // const setHandler = () => {
    //     setState({...state, counterValue: state.startValue})
    //     localStorage.setItem('startValue', state.startValue);
    //     localStorage.setItem('maxValue', state.maxValue);
    //     setIsSetButtonDisabled(true);
    //     setIsIncButtonDisabled(false);
    //     setIsResetButtonDisabled(false);
    // }
    //
    // // Смена класса номера при вводе
    // useEffect(() => {
    //     if (Number(state.counterValue) === Number(state.maxValue)) {
    //         setIsMaximumCounterValueReached(true);
    //     } else setIsMaximumCounterValueReached(false);
    // }, [state.counterValue, state.maxValue])

    return (
        <div className="App">
            <CounterWithRTK/>

            {/*<div className={'container-wrapper'}>*/}
            {/*    <div className={'input-wrapper'}>*/}
            {/*        <InputValue description={'max value: '} currentValue={state.maxValue}*/}
            {/*                    onChangeValue={onChangeMaxValue}*/}
            {/*                    error={state.error}*/}
            {/*        />*/}
            {/*        <InputValue description={'start value: '} currentValue={state.startValue}*/}
            {/*                    onChangeValue={onChangeStartValue}*/}
            {/*                    error={state.error}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    <div className={'button-wrapper'}>*/}
            {/*        <Button name={'set'} handler={setHandler} disabled={isSetButtonDisabled}></Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={'container-wrapper'}>*/}
            {/*    <CounterValue value={state.counterValue}*/}
            {/*                  maximumReached={isMaximumCounterValueReached}*/}
            {/*                  error={state.error}*/}
            {/*    />*/}
            {/*    <div className={'button-wrapper'}>*/}
            {/*        <Button name={'inc'} handler={incHandler}*/}
            {/*                disabled={isMaximumCounterValueReached || isIncButtonDisabled}></Button>*/}
            {/*        <Button name={'reset'} handler={resetHandler} disabled={isResetButtonDisabled}></Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
