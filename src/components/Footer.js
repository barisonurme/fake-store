import React from "react";

import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineMenu,
} from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../app/slicer";

const Footer = (props) => {
  const { footerHeight } = props;
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const currentPage = slice.currentPage;
  const cartItemsQuantity = slice.cartItemsQuantity;

  return (
    <div
      className={`visible lg:hidden fixed bottom-0 flex justify-center ${footerHeight} w-full bg-gray-900`}
    >
      <div
        className={`xl:invisible visible flex max-w-2xl justify-between pl-8 pr-8 items-start fixed w-full bottom-0 ${footerHeight} bg-gray-900 text-white`}
      >
        {/* Home */}
        <div
          onClick={() => dispatch(setCurrentPage("main"))}
          className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${
            currentPage === "main" && "text-sky-500"
          }`}
        >
          <HiOutlineHome size={25} />
        </div>

        {/* Cart */}
        <div
          onClick={() => dispatch(setCurrentPage("cart"))}
          className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${
            currentPage === "cart" && "text-sky-500"
          }`}
        >
          <HiOutlineShoppingCart size={25} />
          <div className="absolute flex font-bold font-montserrat w-4 h-4 bg-white text-sky-500 justify-center align-middle items-center text-xs translate-x-3 -translate-y-3 rounded-full">
            {cartItemsQuantity}
          </div>
        </div>

        {/* Cart */}
        <div
          onClick={() => dispatch(setCurrentPage("settings"))}
          className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${
            currentPage === "settings" && "text-sky-500"
          }`}
        >
          <HiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
