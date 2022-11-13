import React from "react";

import { HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../app/slicer";

const Footer = (props) => {
  const { footerHeight } = props;
  const dispatch = useDispatch();
  const currentPage = useSelector((store) => store.uiSlice.currentPage);

  return (
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
        className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${
          currentPage === "cart" && "text-sky-500"
        }`}
      >
        <HiOutlineShoppingCart size={25} />
      </div>

      {/* Cart */}
      <div
        className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${
          currentPage === "settings" && "text-sky-500"
        }`}
      >
        <HiBars3 size={25} />
      </div>
    </div>
  );
};

export default Footer;
