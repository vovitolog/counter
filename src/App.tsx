import './App.css';
import React from "react";
import {useAppDispath, useAppSelector} from "./hooks/redux";
import {UserSlice} from "./features/Users/reducers/UserSlice";
import {Button} from "./components/Button/Button";

function App() {
    const {count} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispath();
    const {increment} = UserSlice.actions;
    const {decrement} = UserSlice.actions;
    const {reset} = UserSlice.actions;

    return (
        <div className="App">
            <Button disabled={false} handler={() => dispatch(increment(1))} name={'Increment'}></Button>
            <Button disabled={false} handler={() => dispatch(decrement(1))} name={'Decrement'}></Button>
            <Button disabled={false} handler={() => dispatch(reset(0))} name={'Reset'}></Button>
            {count}

        </div>
    );
}

export default App;
