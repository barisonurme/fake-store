import React from "react";

import { HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { useSelector } from "react-redux";

const Footer = (props) => {
  const { footerHeight } = props;
  const currentPage = useSelector((store) => store.uiSlice.currentPage);
  
  return (
    <div
      className={`flex max-w-7xl justify-evenly items-start fixed w-full bottom-0 ${footerHeight} bg-gray-900 text-white`}
    >
      {/* Home */}
      <div
        className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${currentPage === "main" && "text-sky-500"}`}
      >
        <HiOutlineHome size={25} />
        {/* <div className="w-full bg-white h-0.5 rounded-full"></div> */}
      </div>

      {/* Cart */}
      <div
        className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${currentPage === "cart" && "text-sky-500"}`}
      >
        <HiOutlineShoppingCart size={25} />
        {/* <div className="w-full bg-white h-0.5 rounded-full"></div> */}
      </div>

      {/* Cart */}
      <div
        className={`${footerHeight} w-12 flex flex-col items-center justify-evenly hover:text-sky-500 duration-500 ${currentPage === "settings" && "text-sky-500"}`}
      >
        <HiBars3 size={25} />
        {/* <div className="w-full bg-white h-0.5 rounded-full"></div> */}
      </div>
    </div>
  );
};

export default Footer;
