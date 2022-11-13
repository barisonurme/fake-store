import React from "react";

import { setCurrentPage } from "../../app/slicer";
import { HiChevronLeft } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const slice = useSelector((store) => store.uiSlice);
  const cartItems = slice.cartItems;
  const totalCartAmount = slice.totalCartAmount;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-row justify-between w-full max-w-7xl mt-1 md:mt-4">
        <div
          onClick={() => {
            dispatch(setCurrentPage("product"));
          }}
          className="w-12 h-12 border rounded-xl flex justify-center items-center ml-2 lg:ml-10 lg:mr-10  bg-white"
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
      <div className="w-full max-w-7xl flex flex-col p-4">
        {cartItems.map((product) => (
          <ul key={product.id} className="flex w-full border p-1 mb-2">
            <div className="flex justify-center w-12 h-12 m-4">
              <img src={product.image} className="object-contain h-12" />
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
          </ul>
        ))}
      </div>
      <button className="font-montserrat fixed bottom-[70px] md:max-w-xl md:bottom-0 md:relative w-11/12 md:w-full rounded-md p-2 mt-2 bg-sky-500 text-white font-bold text-xl justify-center items-center">
        <div className="text-xs">Total Amount: {totalCartAmount}</div>
        <div className="flex justify-center items-center text-2xl">
          Checkout
          <HiChevronLeft className="rotate-180" />
        </div>
      </button>
    </>
  );
};

export default Cart;
