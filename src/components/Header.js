import React from "react";
import { HeaderCart } from "./HeaderCart";
import { HeaderUser } from "./HeaderUser";
import { useSelector } from "react-redux";

export const Header = (props) => {
  const { headerHeight } = props;
  const selector = useSelector((store) => store.uiSlice);
  const currentPage = selector.currentPage;
  const isLoggedIn = selector.isLoggedIn;
  return (
    <div
      className={`flex fixed top-0 justify-between max-w-7xl w-full ${headerHeight} bg-gray-900 items-center p-4 text-white`}
    >
      <div className="text-xl font-extrabold text-sky-500  font-montserrat">
        fakestore
      </div>
      <div className="flex items-center">
        {!isLoggedIn && currentPage !== "login" && <HeaderUser />}
        {isLoggedIn && (
          <div className="flex">
            <HeaderCart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
