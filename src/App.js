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
import { addLocalCartItems, setDarkModeActive } from "./app/slicer";
import Settings from "./components/Settings";
import UserLogin from "./components/UserLogin";
import Checkout from "./components/Checkout";
import CheckoutSuccess from "./components/CheckoutSuccess";
import BreadcrumbNavigation from "./components/Products/BreadcrumbNavigation";
import Toaster from "./components/UI/Toaster";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const cartItemsQuantity = JSON.parse(
      localStorage.getItem("cartItemsQuantity")
    );
    const totalCartAmount = JSON.parse(localStorage.getItem("totalCartAmount"));
    const isDarkModeActive = localStorage.getItem("isDarkModeActive");
    if (isDarkModeActive === "true") dispatch(setDarkModeActive());
    if (localCartItems === null) return;
    dispatch(
      addLocalCartItems({ localCartItems, cartItemsQuantity, totalCartAmount })
    );
    // eslint-disable-next-line
  }, []);

  const headerHeight = "h-14";
  const footerHeight = "h-20";

  const { currentPage, cartItemsQuantity }  = useSelector((store) => store.uiSlice);

  return (
    <div className="font-montserrat w-full flex flex-col items-center">
      {currentPage === "main" && (
        <div className="z-50">
          <GoToCart cartItemsQuantity={cartItemsQuantity} />
        </div>
      )}
      <ToastContainer transition={Flip} />
      <Toaster />
      <div className={headerHeight}></div>
      <Header headerHeight={headerHeight} />
      <Footer footerHeight={footerHeight} />
      {currentPage !== "main" && (
        <BreadcrumbNavigation headerHeight={headerHeight} />
      )}
      <ProductList />
      {currentPage === "cart" && <Cart />}
      {currentPage === "settings" && <Settings />}
      {currentPage === "login" && <UserLogin />}
      {currentPage === "checkout" && <Checkout />}
      {currentPage === "checkoutSuccess" && <CheckoutSuccess />}
      <div className={`${footerHeight} w-full visible lg:hidden `} />
    </div>
  );
}

export default App;
