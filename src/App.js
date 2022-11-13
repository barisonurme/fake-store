import React, { useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/Products/ProductList";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Flip } from 'react-toastify';

function App() {
  useEffect(() => {}, []);
  const headerHeight = "h-16";
  const footerHeight = "h-14";

  const currentPage = useSelector((store) => store.uiSlice.currentPage);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ToastContainer 
      transition={Flip}
      />
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
      <div className={`${footerHeight} w-full visible lg:hidden `}></div>
    </div>
  );
}

export default App;
