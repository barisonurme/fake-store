import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../app/slicer";
import useInput from "../hooks/use-input";

import { titleCase } from "title-case";

const Checkout = () => {
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const isLoggedIn = slice.isLoggedIn;
  const user = slice.user;
  const userCity = titleCase(user.address.city);
  const userStreet = titleCase(user.address.street);
  // const user = slice.user;

  const {
    value: enteredCardHolder,
    hasError: cardHolderInputHasError,
    isValid: cardHolderInputIsValid,
    valueChangeHandler: cardHolderChangeHandler,
    inputBlurHandler: cardHolderInputBlurHandler,
    focusHandler: cardHolderOnFocusHandler,
    isFocused: cardHolderIsFocused,
    isEmpty: isCardHolderInputEmpty,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCardNumber,
    hasError: cardNumberInputHasError,
    isValid: cardNumberInputIsValid,
    valueChangeHandler: cardNumberChangeHandler,
    inputBlurHandler: cardNumberInputBlurHandler,
    focusHandler: cardNumberOnFocusHandler,
    isFocused: cardNumberIsFocused,
    isEmpty: isCardNumberInputEmpty,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCardExpMonth,
    hasError: cardExpMonthInputHasError,
    isValid: cardExpMonthInputIsValid,
    valueChangeHandler: cardExpMonthChangeHandler,
    inputBlurHandler: cardExpMonthInputBlurHandler,
    focusHandler: cardExpMonthOnFocusHandler,
    isFocused: cardExpMonthIsFocused,
    isEmpty: isCardExpMonthInputEmpty,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCardExpYear,
    hasError: cardExpYearInputHasError,
    isValid: cardExpYearInputIsValid,
    valueChangeHandler: cardExpYearChangeHandler,
    inputBlurHandler: cardExpYearInputBlurHandler,
    focusHandler: cardExpYearOnFocusHandler,
    isFocused: cardExpYearIsFocused,
    isEmpty: isCardExpYearInputEmpty,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCardCVC,
    hasError: cardCVCInputHasError,
    isValid: cardCVCInputIsValid,
    valueChangeHandler: cardCVCChangeHandler,
    inputBlurHandler: cardCVCInputBlurHandler,
    focusHandler: cardCVCOnFocusHandler,
    isFocused: cardCVCIsFocused,
    isEmpty: isCardCVCInputEmpty,
  } = useInput((value) => value.trim() !== "");

  return (
    <>
      {!isLoggedIn && (
        <>
          <div className="flex w-full h-[calc(100vh-360px)] justify-center items-center">
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
          <div className="flex flex-col justify-start items-center w-full h-[calc(100vh-200px)]  dark:text-slate-300">
            {/* BlueCard */}
            <div className="flex flex-col w-full max-w-sm p-4">
              <div className="flex flex-col w-full h-52 bg-sky-500 border-b-2 border-sky-600 rounded-3xl p-10 justify-between shadow-xl">
                <div>
                  <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                    Card Holder
                  </div>
                  <div className="text-white font-semibold tracking-wide text-sm">
                    **
                  </div>
                </div>
                <div>
                  <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                    Card Number
                  </div>
                  <div className="flex justify-between text-white font-semibold tracking-wide text-2xl">
                    <div>**</div>
                  </div>
                </div>
                <div className="flex justify-between w-36">
                  <div>
                    <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                      Exp. Date
                    </div>
                    <div className="text-white flex font-semibold tracking-wide text-sm">
                      <div>**</div>&nbsp;{"/"}&nbsp;
                      <div>**</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sky-700 font-semibold tracking-wide text-[10px]">
                      CVC
                    </div>
                    <div className="text-white font-semibold tracking-wide text-sm">
                      **
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="flex flex-col max-w-xl w-full justify-center items-center p-4  md:p-0 md:pt-4">

              {/* Card Holder */}
              <div className="flex flex-col w-full">
                <label
                  className={`
                  ${
                    isCardHolderInputEmpty
                      ? "translate-y-8 translate-x-6"
                      : "translate-y-2 translate-x-6"
                  } 
                  ${
                    !cardHolderIsFocused
                      ? "translate-y-8 translate-x-6"
                      : "translate-y-2 translate-x-6"
                  } 
                  ${cardHolderInputHasError && "text-rose-500"}
                  flex justify-center items-center w-24 h-4 p-1 text-xs bg-white dark:bg-slate-800 pointer-events-none`}
                >
                  Card Holder
                </label>
                <input
                  onChange={cardHolderChangeHandler}
                  onBlur={cardHolderInputBlurHandler}
                  value={enteredCardHolder}
                  onFocus={cardHolderOnFocusHandler}
                  className={` ${
                    cardHolderInputHasError && "border-rose-500"
                  }  flex w-full bg-transparent rounded-xl border p-2 pt-3 pl-5 pb-3`}
                />
              </div>

              {/* Card Number */}
              <div className="flex flex-col w-full">
                <label
                  className={`
                  ${
                    isCardNumberInputEmpty
                      ? "translate-y-8 translate-x-6"
                      : "translate-y-2 translate-x-6"
                  } 
                  ${
                    !cardNumberIsFocused
                      ? "translate-y-8 translate-x-6"
                      : "translate-y-2 translate-x-6"
                  } 
                   ${
                     cardNumberInputHasError && "text-rose-500"
                   } flex justify-center items-center w-24 h-4 p-1 text-xs bg-white dark:bg-slate-800 pointer-events-none`}
                >
                  Card Number
                </label>
                <input
                  onChange={cardNumberChangeHandler}
                  onBlur={cardNumberInputBlurHandler}
                  value={enteredCardNumber}
                  onFocus={cardNumberOnFocusHandler}
                  className={`
                  ${cardHolderInputHasError && "border-rose-500"} 
                  flex w-full bg-transparent rounded-xl border p-2 pt-3 pl-5 pb-3`}
                />
              </div>

              {/* Cart Exp Month */}
              <div className="flex flex-row gap-4 w-full">
                <div>
                <label
                  className={`
                  ${
                    isCardExpMonthInputEmpty
                      ? "translate-y-8 translate-x-4"
                      : "translate-y-2 translate-x-6"
                  } 
                  ${
                    !cardExpMonthIsFocused
                      ? "translate-y-8 translate-x-4"
                      : "translate-y-2 translate-x-6"
                  } 
                   ${
                     cardExpMonthInputHasError && "text-rose-500"
                   } flex justify-center items-center w-12 h-4 p-1 text-xs bg-white dark:bg-slate-800 pointer-events-none`}
                >
                  Month
                </label>
                <input
                  onChange={cardExpMonthChangeHandler}
                  onBlur={cardExpMonthInputBlurHandler}
                  value={enteredCardExpMonth}
                  onFocus={cardExpMonthOnFocusHandler}
                  className={`
                  ${cardExpMonthInputHasError && "border-rose-500"} 
                  flex w-full bg-transparent rounded-xl border p-2 pt-3 pl-5 pb-3`}
                />
                </div>

                {/* Cart Exp Year */}
                <div>
                <label
                  className={`
                  ${
                    isCardExpYearInputEmpty
                      ? "translate-y-8 translate-x-4"
                      : "translate-y-2 translate-x-6"
                  } 
                  ${
                    !cardExpYearIsFocused
                      ? "translate-y-8 translate-x-4"
                      : "translate-y-2 translate-x-6"
                  } 
                   ${
                     cardExpYearInputHasError && "text-rose-500"
                   } flex justify-center items-center w-12 h-4 p-1 text-xs bg-white dark:bg-slate-800 pointer-events-none`}
                >
                  Year
                </label>
                <input
                  onChange={cardExpYearChangeHandler}
                  onBlur={cardExpYearInputBlurHandler}
                  value={enteredCardExpYear}
                  onFocus={cardExpYearOnFocusHandler}
                  className={`
                  ${cardExpYearInputHasError && "border-rose-500"} 
                  flex w-full bg-transparent rounded-xl border p-2 pt-3 pl-5 pb-3`}
                />
                </div>

                {/* Card CVC */}
                <div>
                <label
                  className={`
                  ${
                    isCardCVCInputEmpty
                      ? "translate-y-8 translate-x-4"
                      : "translate-y-2 translate-x-6"
                  } 
                  ${
                    !cardCVCIsFocused
                      ? "translate-y-8 translate-x-4"
                      : "translate-y-2 translate-x-6"
                  } 
                   ${
                     cardCVCInputHasError && "text-rose-500"
                   } flex justify-center items-center w-12 h-4 p-1 text-xs bg-white dark:bg-slate-800 pointer-events-none`}
                >
                  CVC
                </label>
                <input
                  onChange={cardCVCChangeHandler}
                  onBlur={cardCVCInputBlurHandler}
                  value={enteredCardCVC}
                  onFocus={cardCVCOnFocusHandler}
                  className={`
                  ${cardCVCInputHasError && "border-rose-500"} 
                  flex w-full bg-transparent rounded-xl border p-2 pt-3 pl-5 pb-3`}
                />
                </div>
              </div>
            </form>
            <div className="flex gap-4 mt-4 mb-4 p-4 md:p-0 flex-col items-start justify-start w-full max-w-xl  dark:text-slate-300">
              <div className="flex flex-col w-full">
                <div>Adress Info</div>
                <div className="w-full border p-4 rounded-xl text-xs text-gray-700  dark:text-slate-400 tracking-wider">
                  {userStreet} Street, No:{user.address.number} , {userCity} ,{" "}
                  {user.address.zipcode}
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div>Phone Number</div>
                <div className="w-full border p-4 rounded-xl text-xs text-gray-700  dark:text-slate-400 tracking-wider">
                  {user.phone}
                </div>
              </div>
            </div>
            <button className="capitalize fixed md:flex bottom-[100px] md:bottom-auto md:max-w-xl md:relative w-11/12 md:w-full rounded-xl p-2 mt-2 bg-sky-500 text-white font-bold text-xl justify-center items-center">
              <div className="flex justify-center items-center text-xl">
                Finish Order
                <HiChevronLeft className="rotate-180" />
              </div>
            </button>
          </div>
          <div className={`h-32 w-full visible lg:hidden `}></div>
        </>
      )}
    </>
  );
};

export default Checkout;
