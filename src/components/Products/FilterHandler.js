import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";
import { titleCase } from "title-case";
import { filterStateHandler, sortHandler } from "../../app/slicer";

const FilterHandler = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { categories } = props;
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const products = slice.products;
  const currentSortMethod = slice.currentSortMethod;
  const darkMode = slice.darkMode;

  useEffect(() => {
    dispatch(filterStateHandler({ selectedOption, products }));
    dispatch(
      sortHandler({ selectedOption: { value: currentSortMethod }, products })
    );
    // eslint-disable-next-line
  }, [selectedOption]);

  useEffect(() => {
    setOptions([{ value: "All", label: "All" }]);
    console.log(categories);
    categories.forEach((category) => {
      setOptions((options) => [
        ...options,
        { value: category, label: titleCase(category) },
      ]);
    });
    // eslint-disable-next-line
  }, [categories]);

  const [options, setOptions] = useState([{ value: "All", label: "All" }]);

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
    <div className="font-montserrat flex flex-row w-full items-center pl-8 mt-4">
      <Select
        onChange={setSelectedOption}
        className="w-40 cursor-pointer appearance-none"
        isSearchable={false}
        placeholder={"Categories"}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};

export default FilterHandler;
