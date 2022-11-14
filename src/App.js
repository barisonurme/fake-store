import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/Products/ProductList";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Flip } from "react-toastify";
import { GoToCart } from "./components/Cart/GoToCart";
import { addLocalCartItems } from "./app/slicer";
import Settings from "./components/Settings";
import UserLogin from "./components/UserLogin";
import Checkout from "./components/Checkout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const cartItemsQuantity = JSON.parse(
      localStorage.getItem("cartItemsQuantity")
    );
    const totalCartAmount = JSON.parse(localStorage.getItem("totalCartAmount"));
    console.log(localCartItems);
    if (localCartItems === null) return;
    dispatch(
      addLocalCartItems({ localCartItems, cartItemsQuantity, totalCartAmount })
    );
  }, []);
  const headerHeight = "h-16";
  const footerHeight = "h-14";

  const slice = useSelector((store) => store.uiSlice);
  const currentPage = slice.currentPage;
  const cartItemsQuantity = slice.cartItemsQuantity;

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {currentPage === "main" && (
        <div className="z-50">
          <GoToCart cartItemsQuantity={cartItemsQuantity} />
        </div>
      )}
      <ToastContainer transition={Flip} />
      <div
        className={`fixed top-0 flex justify-center ${headerHeight} w-full bg-gray-900`}
      >
        <Header headerHeight={headerHeight} />
      </div>
      <div
        className={`visible lg:hidden fixed bottom-0 flex justify-center ${headerHeight} w-full bg-gray-900`}
      >
        <Footer footerHeight={footerHeight} />
      </div>
      <div className={headerHeight}></div>

      <ProductList />
      {currentPage === "cart" && <Cart />}
      {currentPage === "settings" && <Settings />}
      {currentPage === "login" && <UserLogin />}
      {currentPage === "checkout" && <Checkout />}
      <div className={`${footerHeight} w-full visible lg:hidden `}></div>
    </div>
  );
}

export default App;
