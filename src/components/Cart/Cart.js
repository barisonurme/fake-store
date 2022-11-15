import React , { useRef, useEffect } from "react";

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
      <div className="flex flex-row justify-between w-full max-w-7xl mt-1 md:mt-4 pl-4 pr-4 dark:text-slate-300">
        <div
          onClick={() => {
            dispatch(setCurrentPage("main"));
          }}
          className="w-12 h-12 border rounded-xl flex justify-center items-center lg:mr-10 bg-white  dark:bg-slate-700 dark:border-slate-500"
        >
          <HiChevronLeft size={25} />
        </div>
        <div className="w-full max-w-7xl font-semibold flex text-lg h-12 justify-center items-center p-4">
          <div className="flex font-montserrat">Your Cart</div>
        </div>
        <div className="w-12 h-12 opacity-0"></div>
      </div>
      {cartItems.length === 0 && (
        <div className="h-96 flex justify-center items-center">
          Cart is Empty
        </div>
      )}
      <div ref={parent} className="w-full max-w-7xl flex flex-col p-4">
        {cartItems.map((product) => (
          <ul
            key={product.id}
            className="flex justify-center items-center w-full border dark:border-slate-700 dark:text-slate-300 p-1 mb-2"
          >
            <div className="flex justify-center w-12 h-12 m-4">
              <img alt={product.title} src={product.image} className="object-contain h-12" />
            </div>
            <div className="flex flex-col grow flex-wrap">
              <div className="font-montserrat font-medium">{product.title}</div>
              <div className="font-montserrat font-semibold text-xs">
                {product.quantity} piece
              </div>
              <div className="font-montserrat text-xl font-semibold">
                ${product.price}
              </div>
            </div>
            <HiOutlineX
              onClick={() => {
                dispatch(deleteItemFromCart(product.id));
                dispatch(totalCartAmountCalc());
              }}
              size={15}
              className="mr-4"
            />
          </ul>
        ))}
      </div>
      {totalCartAmount > 0 && (
        <>
          <button
            onClick={() => dispatch(setCurrentPage("checkout"))}
            className="font-montserrat fixed bottom-[70px] md:max-w-xl md:bottom-0 md:relative w-11/12 md:w-full rounded-md p-2 mt-2 bg-sky-500 text-white font-bold text-xl justify-center items-center"
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
