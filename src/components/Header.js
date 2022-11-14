import React from "react";
import { HeaderCart } from "./HeaderCart";
import { HeaderUser } from "./HeaderUser";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../app/slicer";

export const Header = (props) => {
  const { headerHeight } = props;
  const slice = useSelector((store) => store.uiSlice);
  const dispatch = useDispatch();
  const currentPage = slice.currentPage;
  const isLoggedIn = slice.isLoggedIn;
  const cartItemsQuantity = slice.cartItemsQuantity;

  return (
    <div
      className={`fixed top-0 flex justify-center ${headerHeight} w-full bg-gray-900 z-10`}
    >
      <div
        className={`flex fixed top-0 justify-between max-w-7xl w-full ${headerHeight} bg-gray-900 items-center p-4 text-white`}
      >
        <div
          onClick={() => dispatch(setCurrentPage("main"))}
          className="text-xl font-extrabold text-sky-500 cursor-pointer font-montserrat"
        >
          fakestore
        </div>
        <div className="flex items-center">
          {currentPage !== "login" && <HeaderUser />}
          {isLoggedIn && (
            <div className="flex">
              <HeaderCart cartItemsQuantity={cartItemsQuantity} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
