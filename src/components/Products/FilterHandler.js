import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Select from "react-select";
import { titleCase } from "title-case";
import { filterStateHandler, sortHandler } from "../../app/slicer";

const FilterHandler = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { categories } = props;
  const dispatch = useDispatch();
  const products = useSelector((store) => store.uiSlice.products);
  const currentSortMethod = useSelector((store) => store.uiSlice.currentSortMethod);

  useEffect(() => {
    dispatch(filterStateHandler({ selectedOption, products }));
    dispatch(sortHandler({ selectedOption: { value: currentSortMethod }, products }));
    // eslint-disable-next-line
  }, [selectedOption]);

  useEffect(() => {
    categories.forEach((category) => {
      setOptions((options) => [
        ...options,
        { value: category, label: titleCase(category) },
      ]);
    });
    // eslint-disable-next-line
  }, [categories]);

  const [options, setOptions] = useState([{ value: "All", label: "All" }]);

  return (
    <div className="font-montserrat flex flex-row w-full items-center pl-8 mt-4">
      <Select
        onChange={setSelectedOption}
        className="w-40 cursor-pointer appearance-none"
        isSearchable={false}
        placeholder={"Categories"}
        options={options}
      />
    </div>
  );
};

export default FilterHandler;
