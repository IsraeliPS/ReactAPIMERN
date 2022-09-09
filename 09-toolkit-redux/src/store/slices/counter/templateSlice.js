import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
};
export const templateSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state) => {
      state.counter += 5;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByTen: (state, action) => {
      state.counter += action.payload;
    },
  },
});
export const { increment, decrement, incrementByTen } = templateSlice.actions;
