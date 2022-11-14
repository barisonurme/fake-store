import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";
import { sortHandler } from "../../app/slicer";

const options = [
  { value: "Price Low", label: "Price Low" },
  { value: "Price High", label: "Price High" },
  { value: "Best Rating", label: "Best Rating" },
];

export const SortHandler = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const products = useSelector((store) => store.uiSlice.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortHandler({ selectedOption, products }));
  }, [selectedOption]);

  return (
    <div className="w-48 flex font-montserrat justify-end text-right pr-8 mt-4">
      <Select
        onChange={setSelectedOption}
        placeholder={"Sort"}
        className="flex gap-3"
        options={options}
      />
    </div>
  );
};

export default SortHandler;
