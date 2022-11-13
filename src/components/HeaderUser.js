import React from "react";

import { AiOutlineUser } from "react-icons/ai";

export const HeaderUser = () => {
  return (
    <div className=" font-montserrat flex items-center justify-center hover:bg-gray-600 border border-gray-800 hover:border-gray-900 p-1  pl-4 pr-4  rounded-xl duration-500">
      <div className="flex flex-col start text-left items-end pr-2">
        <div className="flex text-xs -translate-x-px translate-y-1">Hello,</div>
        <div className="flex ml-1 cursor-pointer ">Login Here</div>
      </div>
      <AiOutlineUser size={20} className="text-sky-500" />
    </div>
  );
};
