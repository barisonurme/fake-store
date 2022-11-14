import React, { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { UserLoginHandler } from "../app/FetchData";
import { setCurrentPage, userLoginState } from "../app/slicer";
import Input from "./UI/Input";
import Loading from "./UI/Loading";

const UserLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const response = await UserLoginHandler({
      username: "johnd",
      password: "m38rmF",
    });
    if (loading) return;
    setLoading(false);
    dispatch(userLoginState({ status: "loginSuccess", user: response }));
    dispatch(setCurrentPage("main"));
  };
  return (
    <div className="w-full flex justify-center items-center flex-col font-montserrat">
      <div className="flex flex-row justify-between w-full max-w-7xl mt-1 md:mt-4">
        <div
          onClick={() => {
            dispatch(setCurrentPage("main"));
          }}
          className="w-12 h-12 border rounded-xl flex justify-center items-center ml-2 lg:ml-10 lg:mr-10  bg-white"
        >
          <HiChevronLeft size={25} />
        </div>
        <div className="w-full max-w-7xl font-semibold flex text-lg h-12 justify-center items-center p-4">
          <div className="flex">Login Page</div>
        </div>
      </div>
      <form
        onSubmit={submitFormHandler}
        className="flex max-w-5xl w-full items-center flex-col p-4"
      >
        <label>User Name:</label>
        <Input
          placeHolder="User Name"
          styles={"w-full h-12 border rounded-xl p-4 grow"}
        />
        <label>Password:</label>
        <Input
          placeHolder="Password"
          styles={"w-full h-12 border rounded-xl p-4 grow"}
        />
        <div className="w-12 h-12 opacity-0"></div>
        <button
          type="submit"
          className="flex bg-sky-500 items-center justify-center text-white rounded-xl w-full p-4"
        >
          {loading ? <Loading /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
