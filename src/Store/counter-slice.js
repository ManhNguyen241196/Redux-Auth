import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  // Định nghĩa Biến sẽ là 1 function để có thể export sang
  //file khác. Biến đưa vào Slice là 1 object có chứa key là các phần cơ bản của 1 store
  // reduce thay vì được khai báo riêng và ghép nó vào store thì nó được khai báo chung trong slice
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      console.log(counterSlice.reducer);
      state.counter = state.counter + 1;
    },
    incrementby5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter = state.counter - 1;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
