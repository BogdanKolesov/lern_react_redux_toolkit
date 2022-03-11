import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        toggleCompletedPost: (state, action) => {
            const togglePost = state.posts.find((post) => post.id === action.payload)
            togglePost.completed = !togglePost.completed
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    }
})

export const { addPost, toggleCompletedPost, removePost } = postSlice.actions
export default postSlice.reducer  