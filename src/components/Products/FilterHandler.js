import React from "react";

import {HiChevronDown} from "react-icons/hi"

const FilterHandler = (props) => {
  return (
    <div  className="flex flex-row w-full items-center bg-gray-300">
      <div className="cursor-pointer">FilterHandler</div>
      <HiChevronDown className="cursor-pointer"/>
    </div>
  );
};

export default FilterHandler;
