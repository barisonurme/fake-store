import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { darkModeHandler, setCurrentPage, userLoginState } from "../app/slicer";

const Settings = () => {
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const darkMode = slice.darkMode;
  const user = slice.user;
  const isLoggedIn = slice.isLoggedIn;

  return (
    <div className="w-full flex justify-center flex-col font-montserrat">
      <div className="flex flex-row justify-between w-full max-w-7xl mt-1 md:mt-4  pl-4 pr-4">
        <div
          onClick={() => {
            dispatch(setCurrentPage("main"));
          }}
          className="w-12 h-12 border rounded-xl flex justify-center items-center lg:mr-10  bg-white"
        >
          <HiChevronLeft size={25} />
        </div>
        <div className="w-full max-w-7xl font-semibold flex text-lg h-12 justify-center items-center p-4">
          <div className="flex">Settings</div>
        </div>
        <div className="w-12 h-12 opacity-0"></div>
      </div>

      {/* Appearances */}
      <div className="flex flex-col p-4 select-none">
        <div className="w-full flex justify-start text-sky-500 font-semibold">
          Appearances
        </div>
        <div className="flex w-full h-px bg-sky-500" />
        <div className="flex justify-between p-4">
          <div>Dark Mode</div>
          <div
            onClick={() => dispatch(darkModeHandler(!darkMode))}
            className={`flex items-center ${
              darkMode ? "justify-end bg-sky-500" : "justify-start bg-gray-500 "
            } w-12 h-6 rounded-full p-1 cursor-pointer`}
          >
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/*  */}
      {isLoggedIn && (
        <div className="flex flex-col p-4 select-none">
          <div className="w-full flex justify-start text-sky-500 font-semibold">
            User Settings
          </div>
          <div className="flex w-full h-px bg-sky-500" />
          <div className="flex flex-col items-start justify-between">
            <div className="flex flex-col gap-3 p-4">
              <div className="flex">
                <div className="font-light">Username:&nbsp;</div>
                <div>{user.username}</div>
              </div>
              <div className="flex">
                <div className="font-light">First Name:&nbsp;</div>
                <div>{user.name.firstname}</div>
              </div>
              <div className="flex">
                <div className="font-light">Last Name:&nbsp;</div>
                <div>{user.name.lastname}</div>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(setCurrentPage("main"));
                dispatch(userLoginState({ status: "logoutSuccess" }));
                toast.success("You have successfully logged out", {
                  position: "top-center",
                  autoClose: 500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }}
              className="flex w-full justify-center items-center p-2 rounded-xl bg-sky-500 text-white"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
