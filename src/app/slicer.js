import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "main",
  isLoggedIn: false,
  selectedProduct: [],
  cartItems: [],
  cartItemsQuantity: 0,
  totalCartAmount: 0,
  user: {
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: 3,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  },
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
      const { status, user } = action.payload;
      switch (status) {
        case "loginSuccess":
          state.isLoggedIn = true;
          state.user = user;
          break;
        case "logoutSuccess":
          localStorage.removeItem("cartItems");
          localStorage.removeItem("cartItemsQuantity");
          localStorage.removeItem("totalCartAmount");
          state.isLoggedIn = false;
          state.user = initialState.user;
          state.cartItems = [];
          state.cartItemsQuantity = 0;
          state.totalCartAmount = 0;
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
