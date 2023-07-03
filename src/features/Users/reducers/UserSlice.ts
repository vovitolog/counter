import {IUser} from "../models/Iuser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState  {
    users: IUser[];
    isLoading: boolean;
    error: string,
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment (state, action: PayloadAction<number>) {
            state.count += action.payload;
        },
        decrement (state, action: PayloadAction<number>) {
            state.count -= action.payload;
        },
        reset (state, action: PayloadAction<number>) {
            state.count = action.payload;
        },
        setValueFromLS (state, action: PayloadAction<number>) {

        }
    }
})

export default UserSlice.reducer;
