import React, { useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../app/slicer";
import { titleCase } from "title-case";

const BreadcrumbNavigation = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((store) => store.uiSlice.currentPage);
  const [currentPageDisplay, setCurrentPageDisplay] = useState("s");

  useEffect(() => {
    switch (currentPage) {
      default:
        setCurrentPageDisplay(titleCase(currentPage));
        break;
    }
  }, [currentPage]);

  return (
    <div className="flex flex-row justify-between w-full max-w-7xl m-auto mt-4 md:mt-4 pl-4 pr-4 dark:text-slate-300">
      <div
        onClick={() => {
          dispatch(setCurrentPage("main"));
        }}
        className="w-12 h-12 border rounded-xl flex justify-center items-center lg:mr-10 bg-white  dark:bg-slate-700 dark:border-slate-500"
      >
        <HiChevronLeft size={25} />
      </div>
      <div className="w-full max-w-7xl font-semibold flex text-lg h-12 justify-center items-center p-4">
        <div className="flex">{currentPageDisplay}</div>
      </div>
      <div className="w-12 h-12"></div>
    </div>
  );
};

export default BreadcrumbNavigation;
