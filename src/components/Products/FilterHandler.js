import React from "react";

import {HiChevronDown} from "react-icons/hi"

const FilterHandler = (props) => {
  return (
    <div  className="flex flex-row w-full items-center pl-8 mt-4">
      <div className="cursor-pointer">Categories</div>
      <HiChevronDown className="cursor-pointer"/>
    </div>
  );
};

export default FilterHandler;
