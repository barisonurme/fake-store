import React from "react";

import { TiTick } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../app/slicer";

const CheckoutSuccess = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-8 items-center justify-center h-[calc(100vh-360px)] w-full max-w-5xl flex-col text-green-500">
        <div className="flex items-center justify-center w-24 h-24 border-8 border-green-500 rounded-full">
          <TiTick size={85} />
        </div>
        <div className="flex flex-col items-center font-bold text-xl">
          <div>We Received Your Order</div>
          <div className="text-2xl">Thanks for choosing us!</div>
        </div>
        <button
          onClick={() => dispatch(setCurrentPage("main"))}
          className="bg-sky-500 text-white p-2 pl-4 pr-4 mt-4 rounded-xl"
        >
          Back to Main Page
        </button>
      </div>
    </>
  );
};

export default CheckoutSuccess;
