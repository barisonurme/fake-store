import React, { useRef, useEffect } from "react";

import {
  deleteItemFromCart,
  setCurrentPage,
  totalCartAmountCalc,
} from "../../app/slicer";
import { HiChevronLeft, HiOutlineX } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

import autoAnimate from "@formkit/auto-animate";

const Cart = () => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const slice = useSelector((store) => store.uiSlice);
  const cartItems = slice.cartItems;
  const totalCartAmount = slice.totalCartAmount;
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length === 0 && (
        <div className="h-96 flex justify-center items-center dark:text-slate-300">
          Cart is Empty
        </div>
      )}
      <div ref={parent} className="w-full max-w-7xl flex flex-col p-4 gap-2" role="list">
        {cartItems.map((product) => (
          <ul
            key={product.id}
            className="flex justify-between items-center w-full border dark:border-b-2 rounded-md dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 p-1"
          >
            <div className="flex grow-1 justify-center items-center w-12 h-12 p-4 rounded-md m-2 bg-white">
              <img
                alt={product.title}
                src={product.image}
                className="object-contain h-6"
              />
            </div>
            <div className="flex flex-col grow flex-wrap">
              <div className="font-medium">{product.title}</div>
              <div className="font-semibold text-xs">
                {product.quantity} piece
              </div>
              <div className="text-xl font-semibold">
                ${product.price}
              </div>
            </div>
            <div className="max-w-12">
              <HiOutlineX
                onClick={() => {
                  dispatch(deleteItemFromCart(product.id));
                  dispatch(totalCartAmountCalc());
                }}
                size={15}
                className="mr-4"
              />
            </div>
          </ul>
        ))}
      </div>
      {totalCartAmount > 0 && (
        <>
          <button
            onClick={() => dispatch(setCurrentPage("checkout"))}
            className="fixed bottom-[100px] md:max-w-xl md:bottom-0 md:relative w-11/12 md:w-full rounded-md p-2 mt-2 bg-sky-500 text-white font-bold text-xl justify-center items-center"
          >
            <div className="text-xs">Total Amount: {totalCartAmount}</div>
            <div className="flex justify-center items-center text-2xl">
              Checkout
              <HiChevronLeft className="rotate-180" />
            </div>
          </button>
          <div className={`h-[70px] w-full visible lg:hidden `}></div>
        </>
      )}
    </>
  );
};

export default Cart;
