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

export const deleteTodoById = createAsyncThunk(
    'todos/deleteTodoById',
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch(deleteTodo(id))
    }
)

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)

        }
    },
    extraReducers: {
        [getTodos.fulfilled]: () => console.log('fulfilled'), //отправлен запрос
        [getTodos.pending]: () => console.log('pending'), //запрос выполнен
        [getTodos.rejected]: () => console.log('rejected'), //ошибка
        ////
        [deleteTodoById.fulfilled]: () => console.log('fulfilled'), //отправлен запрос
        [deleteTodoById.pending]: () => console.log('pending'), //запрос выполнен
        [deleteTodoById.rejected]: () => console.log('rejected') //ошибка
    }
})

export const { setTodos, deleteTodo } = todoSlice.actions
export default todoSlice.reducer