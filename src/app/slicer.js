import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "main",
  isLoggedIn: false,
  selectedProduct: [],
  cartItems: [],
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    addProductToCart(state, action) {},
  },
});

export const { setCurrentPage, setSelectedProduct } = uiSlice.actions;

export default uiSlice.reducer;
