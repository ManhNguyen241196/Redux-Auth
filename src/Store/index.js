import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

//-------------Khi chỉ sử dụng redux bình thuong------------
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "incrementby5") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//       // showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "toggle") {
//     console.log(state);
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };
// const store = createStore(counterReducer);
//----------------------------------------------------------

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
}); // reducer này là biến mặc định  của redux
//khai báo thì trực tiếp nó sẽ trỏ vào reducers được đưa vào slice.
//configureStore tương tự như createStore nhưng nó tốt hơn . tuy nhiên biến chính mà nó trỏ tới
//vẫn phải là reducer. Cốt lõi của 1 store dù tạo dưới dạng j cũng phải đưa vào đó dk 1 reducer
//-----------------------------------------

export const counterActions = counterSlice.actions; // việc này sẽ trả lại
// một object chứa tất cả các phương thức liên quan tới reducers mà đã được khai
// báo trước đó.
export const authActions = authSlice.actions;

export default store;
