import { configureStore, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: ['Aprender Redux', 'Estudar Zustand'],

    reducers: {},
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    },
})