import {createSlice} from '@reduxjs/toolkit'

export interface CounterState {
    value: number | string,
    startValue: number | string,
    maxValue: number | string,
    error: boolean
}

const initialState: CounterState = {
    value: '1',
    startValue: '0',
    maxValue: '1',
    error: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            (Number(state.value) + 1).toString(10)
            console.log(state.value)
        },
        decrement: (state) => {
            (Number(state.value) - 1).toString(10)
        },
        reset: (state) => {
            state.value = 0;
        },
        setError: (state) => {
            state.error = true
        },
        unSetError: (state) => {
            state.error = false
        },
        incMaxValue: (state) => {
            (Number(state.maxValue) + 1).toString(10)
        }
    },
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer
