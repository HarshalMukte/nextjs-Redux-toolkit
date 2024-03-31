import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    incrementByNumber: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByNumber } = counterSlice.actions;

export default counterSlice.reducer;
