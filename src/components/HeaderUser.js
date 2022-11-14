import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentPage } from "../app/slicer";

export const HeaderUser = () => {
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const user = slice.user;
  const isLoggedIn = slice.isLoggedIn;
  return (
    <div
      onClick={() => {
        if(!isLoggedIn) dispatch(setCurrentPage("login"))
        else  dispatch(setCurrentPage("settings"))
      }}
      className="hidden font-montserrat md:flex items-center justify-center hover:bg-gray-600 border border-gray-800 hover:border-gray-900 p-1  pl-4 pr-4  rounded-xl duration-500"
    >
      <AiOutlineUser size={20} className="text-sky-500" />
      <div className="flex flex-col text-left items-start pr-2">
        <div className="flex text-xs translate-x-1 translate-y-1">Hello,</div>
        <div className="flex ml-1 cursor-pointer ">
          {!isLoggedIn && "Login Here"}
          {isLoggedIn && `${user.name.firstname}`}
        </div>
      </div>
    </div>
  );
};
