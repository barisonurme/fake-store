import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "main",
  isLoggedIn: false,
  selectedProduct: [],
  cartItems: [],
  cartItemsQuantity: 0,
  totalCartAmount: 0,
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
    addProductToCart(state, action) {
      const { selectedProduct, quantity } = action.payload;

      // Checking if item exist in cart
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].id === selectedProduct.id) {
          state.cartItems[i].quantity = state.cartItems[i].quantity + quantity;
          state.cartItemsQuantity =
            state.cartItemsQuantity + action.payload.quantity;

          state.totalCartAmount = (
            parseFloat(state.totalCartAmount) +
            selectedProduct.price * quantity
          ).toFixed(2);
          return;
        }
      }

      // If item doesn't exist in cart
      state.cartItems = [...state.cartItems, { ...selectedProduct, quantity }];
      state.cartItemsQuantity =
        state.cartItemsQuantity + action.payload.quantity;

      state.totalCartAmount = (
        state.totalCartAmount +
        selectedProduct.price * quantity
      ).toFixed(2);
    },
  },
});

export const { setCurrentPage, setSelectedProduct, addProductToCart } =
  uiSlice.actions;

export default uiSlice.reducer;
