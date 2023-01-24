import React, {useState} from 'react';
import './App.css';
import {TestCounter} from "./components/TestCounter";

function App() {
    const [count, setCount] = useState(0);
    const incHandler = () => {
        setCount(count + 1);
    }
    const resetHandler = () => {
        setCount(0);
    }
    return (
        <div className="App">
            <TestCounter/>
            <div>
                {count}
            </div>
            <div>
                <button
                    onClick={incHandler}
                    disabled={count === 5}
                >INC
                </button>
                <button
                    onClick={resetHandler}
                    disabled={count !== 5}
                >RESET
                </button>
            </div>
        </div>
    );
}

export default App;
