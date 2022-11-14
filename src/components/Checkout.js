import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../app/slicer";
import Input from "./UI/Input";

const Checkout = () => {
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const isLoggedIn = slice.isLoggedIn;
  const user = slice.user;

  const [cartHolder, setCartHolder] = useState("**** ****");
  const [cartNumber, setCartNumber] = useState("**** **** **** ****");
  const [cartExpMonth, setCartExpMonth] = useState("**");
  const [cartExpYear, setCartExpYear] = useState("**");
  const [cartCVV, setCartCVV] = useState("***");
  const onInputChange = (strokes, placeHolder) => {
    switch (placeHolder) {
      case "Cart Number":
        if (strokes.trim() === "") {
          setCartNumber("**** **** **** ****");
          return;
        }
        setCartNumber(strokes);
        break;
      case "Cart Holder":
        if (strokes.trim() === "") {
          setCartHolder("**** ****");
          return;
        }
        setCartHolder(strokes);
        break;
        case "Exp. Month":
          if (strokes.trim() === "") {
            setCartExpMonth("**");
            return;
          }
          setCartExpMonth(strokes);
          break;
          case "Exp. Year":
        if (strokes.trim() === "") {
          setCartExpYear("**");
          return;
        }
        setCartExpYear(strokes);
        break;
        case "CVV":
        if (strokes.trim() === "") {
          setCartCVV("***");
          return;
        }
        setCartCVV(strokes);
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!isLoggedIn && (
        <>
          <div className="font-montserrat flex w-full h-[calc(100vh-360px)] justify-center items-center">
            You Need to Login to Continue
          </div>
          <button
            onClick={() => dispatch(setCurrentPage("login"))}
            className="flex p-4 pl-8 pr-8 rounded-xl bg-sky-500 text-white"
          >
            Login
          </button>
        </>
      )}
      {isLoggedIn && (
        <>
          <div className="flex flex-row justify-between w-full max-w-7xl mt-1 md:mt-4">
            <div
              onClick={() => {
                dispatch(setCurrentPage("cart"));
              }}
              className="w-12 h-12 border rounded-xl flex justify-center items-center ml-2 lg:ml-10 lg:mr-10  bg-white"
            >
              <HiChevronLeft size={25} />
            </div>
            <div className="w-full max-w-7xl font-semibold flex text-lg h-12 justify-center items-center p-4">
              <div className="flex">Checkout</div>
            </div>
            <div className="w-12 h-12 opacity-0"></div>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-[calc(100vh-200px)] font-montserrat">
            <div className="flex flex-col w-full max-w-sm p-4">
              <div className="flex flex-col w-full h-52 bg-sky-500 border-b-2 border-sky-600 rounded-3xl p-10 justify-between shadow-xl">
                <div>
                  <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                    Card Holder
                  </div>
                  <div className="text-white font-semibold tracking-wide text-sm">
                    {cartHolder}
                  </div>
                </div>
                <div>
                  <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                    Card Number
                  </div>
                  <div className="flex justify-between text-white font-semibold tracking-wide text-2xl">
                    <div>{cartNumber}</div>
                  </div>
                </div>
                <div className="flex justify-between w-36">
                  <div>
                    <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                      Exp. Date
                    </div>
                    <div className="text-white flex font-semibold tracking-wide text-sm">
                      <div>{cartExpMonth}</div>&nbsp;{"/"}&nbsp;
                      <div>{cartExpYear}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                      CVV
                    </div>
                    <div className="text-white font-semibold tracking-wide text-sm">
                      {cartCVV}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full items-center mt-2 gap-4">
              <Input
                onInputChange={onInputChange}
                placeHolder="Cart Holder"
                styles={"w-full max-w-xl h-12 border rounded-xl p-4 "}
              />
              <Input
                onInputChange={onInputChange}
                placeHolder="Cart Number"
                styles={"w-full max-w-xl h-12 border rounded-xl p-4 "}
              />
              <div className="flex w-full gap-4 max-w-xl">
                <Input
                  onInputChange={onInputChange}
                  placeHolder="Exp. Month"
                  styles={"w-full h-12 border rounded-xl p-4 grow"}
                />
                <Input
                  onInputChange={onInputChange}
                  placeHolder="Exp. Year"
                  styles={"w-full h-12 border rounded-xl p-4 grow"}
                />
                <Input
                  onInputChange={onInputChange}
                  placeHolder="CVV"
                  styles={"w-full h-12 border rounded-xl p-4 grow"}
                />
              </div>
            </div>
          </div>

          <button className="font-montserrat fixed bottom-[70px] md:max-w-xl md:bottom-0 md:relative w-11/12 md:w-full rounded-md p-2 mt-2 bg-sky-500 text-white font-bold text-xl justify-center items-center">
            <div className="flex justify-center items-center text-xl">
              Finish Order
              <HiChevronLeft className="rotate-180" />
            </div>
          </button>
        </>
      )}
    </>
  );
};

export default Checkout;
