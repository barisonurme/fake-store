import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  darkModeToggle,
  setCurrentPage,
  toasterHandler,
  userLoginState,
} from "../app/slicer";

const Settings = () => {
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const isDarkModeActive = slice.isDarkModeActive;
  const user = slice.user;
  const isLoggedIn = slice.isLoggedIn;

  return (
    <div className="w-full  max-w-7xl  flex justify-center flex-col dark:text-slate-300">
      {/* Appearances */}
      <div className="flex flex-col p-4 select-none">
        <div className="w-full flex justify-start text-sky-500 font-semibold">
          Appearances
        </div>
        <div className="flex w-full h-px bg-sky-500" />
        <div className="flex justify-between p-4">
          <div>Dark Mode</div>
          <div
            onClick={() => dispatch(darkModeToggle(!isDarkModeActive))}
            className={`flex items-center ${
              isDarkModeActive
                ? "justify-end bg-sky-500"
                : "justify-start bg-gray-500 "
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
                dispatch(
                  toasterHandler({
                    status: true,
                    success: true,
                    msg: "You have successfully logged out",
                  })
                );
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
