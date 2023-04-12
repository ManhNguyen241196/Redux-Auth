import { createSlice } from "@reduxjs/toolkit";

const initiaAuthlState = {
  // trang thai state luoon phải là dang object
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initiaAuthlState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export default authSlice;
