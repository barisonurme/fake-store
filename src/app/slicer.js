import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "main",
  isLoggedIn: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    currentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { testReducer } = uiSlice.actions;

export default uiSlice.reducer;
