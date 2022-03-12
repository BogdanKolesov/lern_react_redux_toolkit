import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    todos: []
}

export const getTodos = createAsyncThunk(
    'todos/getTodos',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch(setTodos(res.data))
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        }
    },
    extraReducers: {
        [getTodos.fulfilled]: () => console.log('fulfilled'),
        [getTodos.pending]: () => console.log('pending'),
        [getTodos.rejected]: () => console.log('rejected')

    }
})

export const { setTodos } = todoSlice.actions
export default todoSlice.reducer