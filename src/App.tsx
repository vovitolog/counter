import React, {useState} from 'react';
import './App.css';
import {TestCounter} from "./components/TestCounter";
import {Button} from "./components/Button/Button";

function App() {
    const [count, setCount] = useState(0);
    const incHandler = () => {
        setCount(count + 1);
    }
    const resetHandler = () => {
        setCount(0);
    }

    const onClickHandler = (name: string) => {
        console.log(name);
    }
    return (
        <div className="App">
            <div className={'container-wrapper'}>
                <div className={'number'}>4</div>
                <div className={'button-wrapper'}>
                    <Button name={'Inc'} handler={onClickHandler}></Button>
                    <Button name={'Reset'} handler={onClickHandler}></Button>
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
