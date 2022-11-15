import React, { useEffect, useState } from "react";
import { FetchAllProduct } from "../../app/FetchData";
import Ratings from "../Ratings";
import FilterHandler from "./FilterHandler";
import SortHandler from "./SortHandler";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setProducts, setSelectedProduct } from "../../app/slicer";
import Product from "./Product";

const ProductList = (props) => {

  const dispatch = useDispatch();
  const currentPage = useSelector((store) => store.uiSlice.currentPage);
  const filteredProducts = useSelector((store) => store.uiSlice.filteredProducts);

  const [categories, setCategories] = useState([]);
  const FetchAllData = async () => {
    // Fetch All Products
    const fetchedProducts = await FetchAllProduct();
    dispatch(setProducts(fetchedProducts));

    // Define categories
    let tempCategories = [];
    fetchedProducts.forEach((product) => {
      if (!tempCategories.includes(product.category))
        tempCategories.push(product.category);
    });
    setCategories(tempCategories);
  };

  useEffect(() => {
    FetchAllData();
  }, []);

  return (
    <>
      {currentPage === "main" && (
        <div className="flex flex-col w-full max-w-7xl dark:text-slate-300">
          <div className="flex w-full max-w-7xl z-0">
            <FilterHandler categories={categories} />
            <SortHandler />
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 p-4">
            {filteredProducts.map((product) => (
              <li
                onClick={() => {
                  dispatch(setSelectedProduct(product));
                  dispatch(setCurrentPage("product"));
                }}
                className="overflow-hidden text-left cursor-pointer flex flex-col rounded-sm justify-between border border-b-4 bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 dark:border-b-yellow-500 border-b-yellow-200 p-2 shadow-sm"
                key={product.id}
              >
                <section className="flex items-center  flex-col w-full">
                  <div className="flex flex-col border justify-center bg-white items-center w-full h-56 pr-6 pl-6">
                    <img
                      alt={product.title}
                      className="h-28 object-contain"
                      src={product.image}
                    />
                  </div>
                  <div className="flex justify-start w-full font-bold text-sm text-gray-700 dark:text-slate-300 p-4 max-h-10 overflow-hidden">
                    {product.title}
                  </div>
                  <div className="w-full pl-4">
                    <Ratings rating={product.rating} />
                  </div>
                </section>
                <section className="w-full flex flex-col items-start p-4 "></section>
                <div className="w-full font-bold text-xl pl-4 pr-4 pb-4">
                  ${product.price}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentPage === "product" && <Product />}
    </>
  );
};

export default ProductList;
