import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Aprender Redux', 'Estudar Zustand', 'Postar o aprendizado'],

  reducers: {
    add: (state, action) => {
        console.log(action)
        state.push(action.payload.newTodo)
      
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const { add } = todoSlice.actions

export type RootSate = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector
