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
  const slice = useSelector((store) => store.uiSlice);
  const products = slice.products;
  const darkMode = slice.darkMode;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sortHandler({ selectedOption, products }));
    // eslint-disable-next-line
  }, [selectedOption]);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      background: darkMode ? "#0f172a" : "#cbd5e1",
      text: darkMode ? "white" : "black",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: "#334155",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: "#0ea5e9",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),
   
  };


  return (
    <div className="w-48 flex font-montserrat justify-end text-right pr-8 mt-4">
      <Select
        onChange={setSelectedOption}
        placeholder={"Sort"}
        className="flex gap-3"
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default SortHandler;
