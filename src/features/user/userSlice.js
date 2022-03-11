import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setSecondName: (state, action) => {
            state.secondName = action.payload
        },
    }
})

export const { setFirstName, setSecondName } = userSlice.actions
export default userSlice.reducer 