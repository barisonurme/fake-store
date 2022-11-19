import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../app/slicer";

export const GoToCart = (props) => {
  const { cartItemsQuantity } = props;
  const dispatch = useDispatch();
  return (
    <>
      {cartItemsQuantity > 0 && (
        <div
          onClick={() => dispatch(setCurrentPage("cart"))}
          className="cursor-pointer hidden md:flex fixed justify-center items-center w-32 h-12 bottom-20 right-20 bg-sky-500 text-white rounded-xl"
        >
          <div className="mr-4">Cart</div>
          <div className="flex justify-center items-center font-semibold text-xs w-6 h-6 rounded-full bg-white text-sky-500">
            {cartItemsQuantity}
          </div>
        </div>
      )}
    </>
  );
};
