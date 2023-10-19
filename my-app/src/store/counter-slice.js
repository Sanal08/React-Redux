import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, isCounterInvisible: false };
const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    setCounterVisibility(state) {
      state.isCounterInvisible = !state.isCounterInvisible;
    },
  },
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;
