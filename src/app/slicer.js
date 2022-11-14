import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const initialState = {
  currentPage: "main",
  isLoggedIn: false,
  selectedProduct: [],
  cartItems: [],
  cartItemsQuantity: 0,
  totalCartAmount: 0,
  username: "",
  darkMode: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    deleteItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });

      state.cartItemsQuantity = 0;
      state.cartItems.forEach((item) => {
        state.cartItemsQuantity = state.cartItemsQuantity + item.quantity;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartItemsQuantity",
        JSON.stringify(state.cartItemsQuantity)
      );
    },
    totalCartAmountCalc(state) {
      state.totalCartAmount = 0;
      state.cartItems.forEach((item) => {
        state.totalCartAmount =
          state.totalCartAmount + item.price * item.quantity;
      });
      localStorage.setItem(
        "totalCartAmount",
        JSON.stringify(state.totalCartAmount)
      );
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    addLocalCartItems(state, action) {
      const { localCartItems, cartItemsQuantity, totalCartAmount } =
        action.payload;
      state.cartItems = localCartItems;
      state.cartItemsQuantity = cartItemsQuantity;
      state.totalCartAmount = totalCartAmount;
    },
    addProductToCart(state, action) {
      const { selectedProduct, quantity } = action.payload;

      // Checking if item exist in cart
      for (let i = 0; i < state.cartItems.length; i++) {
        if (state.cartItems[i].id === selectedProduct.id) {
          state.cartItems[i].quantity = state.cartItems[i].quantity + quantity;
          state.cartItemsQuantity =
            state.cartItemsQuantity + action.payload.quantity;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          localStorage.setItem(
            "cartItemsQuantity",
            JSON.stringify(state.cartItemsQuantity)
          );
          state.totalCartAmount = (
            parseFloat(state.totalCartAmount) +
            selectedProduct.price * quantity
          ).toFixed(2);
          localStorage.setItem(
            "totalCartAmount",
            JSON.stringify(state.totalCartAmount)
          );

          return;
        }
      }

      // If item doesn't exist in cart
      state.cartItems = [...state.cartItems, { ...selectedProduct, quantity }];
      state.cartItemsQuantity =
        state.cartItemsQuantity + action.payload.quantity;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem(
        "cartItemsQuantity",
        JSON.stringify(state.cartItemsQuantity)
      );

      state.totalCartAmount = (
        parseFloat(state.totalCartAmount) +
        selectedProduct.price * quantity
      ).toFixed(2);
      localStorage.setItem(
        "totalCartAmount",
        JSON.stringify(state.totalCartAmount)
      );
    },
    darkModeHandler(state, action) {
      state.darkMode = action.payload;
    },
    userLoginState(state, action) {
      const { status, username } = action.payload;
      switch (status) {
        case "loginSuccess":
          state.isLoggedIn = true;
          state.username = username;
          break;
        case "logoutSuccess":
          state.isLoggedIn = false;
          state.username = "";
          break;

        default:
          break;
      }
    },
  },
});

export const {
  setCurrentPage,
  setSelectedProduct,
  addProductToCart,
  addLocalCartItems,
  deleteItemFromCart,
  totalCartAmountCalc,
  darkModeHandler,
  userLoginState,
} = uiSlice.actions;

export default uiSlice.reducer;
