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
    UserLoginHandler({ username: "mor_2314", password: "83r5^_" });
    if (loading) return;
    setLoading(false);
    dispatch(userLoginState({ status: "loginSuccess", username: "testUser" }));
  };
  return (
    <div className="w-full flex justify-center flex-col font-montserrat">
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
        className="flex w-full items-center flex-col p-4"
      >
        <label>User Name:</label>
        <Input type={"email"} style={"w-full h-12 border rounded-xl p-4"} />
        <label>Password:</label>
        <Input type={"password"} style={"w-full h-12 border rounded-xl p-4"} />
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
