import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: false };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy(state, action) {
      state.counter = state.counter + action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions=counterSlice.counterActions
export default counterSlice.reducer;
