import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./UI/Loading";

import useInput from "../hooks/use-input";
import { UserLoginHandler } from "../app/FetchData";
import { setCurrentPage, toasterHandler, userLoginState } from "../app/slicer";

import { BiHide, BiShow } from "react-icons/bi";

const UserLogin = (props) => {
  const {
    value: enteredUserName,
    hasError: userNameInputHasError,
    isValid: userNameInputIsValid,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameInputBlurHandler,
    focusHandler: userNameOnFocusHandler,
    isEmpty: isUserNameInputEmpty,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: passwordInputIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    focusHandler: passwordFocusHandler,
    isEmpty: isPasswordInputEmpty,
  } = useInput((value) => value !== "");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  let formIsValid = false;
  if (passwordInputIsValid && userNameInputIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!formIsValid) {
      dispatch(
        toasterHandler({
          status: true,
          msg: "Fields can't be empty.",
          success: false,
        })
      );
      return;
    }
    setLoading(true);
    const user = await UserLoginHandler(enteredUserName, enteredPassword);
    dispatch(userLoginState({ status: "loginSuccess", user }));
    dispatch(setCurrentPage("main"));
    dispatch(
      toasterHandler({
        status: true,
        msg: `Welcome, ${user.name.firstname}`,
        success: true,
      })
    );
  };

  return (
    <div className="flex w-full p-4 h-[calc(100vh-360px)] justify-center items-center">
      <form
        onSubmit={submitFormHandler}
        className="flex m-auto max-w-2xl gap-5 rounded-md w-full bg-slate-50 dark:bg-transparent dark:border-transparent dark:shadow-none border shadow-md shadow-slate-500/10 items-center flex-col p-4 justify-center dark:text-slate-300"
      >
        <div className="flex flex-col w-full justify-center items-center">
          <label
            className={`translate-y-8 h-6 text-gray-300 pointer-events-none ${
              !isUserNameInputEmpty && "text-xs -translate-y-0"
            } 
            ${userNameInputHasError && "text-rose-400"}
            duration-200`}
          >
            User Name
          </label>
          <input
            type="text"
            id="name"
            onChange={userNameChangeHandler}
            onBlur={userNameInputBlurHandler}
            value={enteredUserName}
            onFocus={userNameOnFocusHandler}
            className={`border-2 focus:border-sky-500 focus:text-sky-600 w-full p-2 rounded-md  bg-transparent
            ${userNameInputHasError && "border-rose-400"}
            `}
          />
        </div>
        <div className="relative static flex flex-col w-full justify-center items-center">
          <label
            className={`translate-y-8 h-6 text-gray-300 pointer-events-none ${
              !isPasswordInputEmpty && "text-xs -translate-y-0"
            } 
            ${passwordInputHasError && "text-rose-400"}
            duration-200`}
          >
            Password
          </label>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-slate-300 right-4 translate-y-3 cursor-pointer"
          >
            {showPassword ? <BiHide size={18}/> : <BiShow size={18}/>}
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete="off"
            onChange={passwordChangeHandler}
            onBlur={passwordInputBlurHandler}
            value={enteredPassword}
            onFocus={passwordFocusHandler}
            className={`border-2 focus:border-sky-500 focus:text-sky-600  w-full p-2 rounded-md  bg-transparent ${
              passwordInputHasError && "border-rose-400"
            }`}
          />
        </div>
        <button
          type="submit"
          className="flex bg-sky-500 items-center justify-center text-white rounded-xl w-full p-4 mt-4"
        >
          {loading ? <Loading /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
