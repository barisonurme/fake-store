import React from "react";

import { HiOutlineShoppingCart } from "react-icons/hi";

export const HeaderCart = () => {
  return (
    <div className="font-montserrat flex items-center justify-center hover:bg-gray-600  border border-gray-800 hover:border-gray-900 p-1  pl-4 pr-4 rounded-xl duration-500">
      <HiOutlineShoppingCart size={20} className="text-sky-500" />
      <div className="flex flex-col start text-left items-start justify-start ">
        <div className="flex text-xs translate-x-1 translate-y-1">Shopping</div>
        <div className="flex ml-1 cursor-pointer">Cart {"(0)"}</div>
      </div>
    </div>
  );
};
