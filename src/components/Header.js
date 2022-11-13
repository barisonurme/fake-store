import React from "react";
import { HeaderCart } from "./HeaderCart";
import { HeaderUser } from "./HeaderUser";
import { useSelector } from "react-redux";

export const Header = (props) => {
  const { headerHeight } = props;
  const selector = useSelector((store) => store.uiSlice);
  return (
    <div
      className={`flex fixed top-0 justify-between max-w-7xl w-full ${headerHeight} bg-gray-900 items-center p-4 text-white`}
    >
      <div className="text-xl font-extrabold text-sky-500  font-montserrat">fakestore</div>
      <div className="flex items-center">
        {!selector.isLoggedIn && <HeaderUser />}
        <div className="h-8 mr-2 ml-2 w-px bg-gray-500"></div>
        <HeaderCart />
      </div>
    </div>
  );
};

export default Header;
