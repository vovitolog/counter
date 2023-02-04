import React, {useState} from 'react';
import './App.css';
import {TestCounter} from "./components/TestCounter";
import {Button} from "./components/Button/Button";
import classes from "./components/Button/Button.module.css";

function App() {
    const [count, setCount] = useState(0);
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
                <div className={'number'}>4</div>
                <div className={'button-wrapper'}>
                    <Button name={'Set'} handler={onClickHandler} disabled={false}></Button>
                </div>
            </div>
            <div className={'container-wrapper'}>
                <div className={'number'}>{count}</div>
                <div className={'button-wrapper'}>
                    <Button name={'Inc'} handler={incHandler} disabled={count === 5}></Button>
                    <Button name={'Reset'} handler={resetHandler} disabled={false}></Button>
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
