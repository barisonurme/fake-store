import React, { useEffect, useState } from "react";
import { FetchAllProduct } from "../../app/FetchData";
import Ratings from "../Ratings";
import FilterHandler from "./FilterHandler";
import SortHandler from "./SortHandler";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setSelectedProduct } from "../../app/slicer";
import Product from "./Product";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const currentPage = useSelector((store) => store.uiSlice.currentPage);

  // const [categories, setCategories] = useState([]);
  const FetchAllData = async () => {
    // Fetch All Products
    const fetchedProducts = await FetchAllProduct();
    console.log(fetchedProducts);
    setProducts(fetchedProducts);

    // Define categories
    let tempCategories = [];
    fetchedProducts.forEach((product) => {
      if (!tempCategories.includes(product.category))
        tempCategories.push(product.category);
    });
    console.log(tempCategories);
  };

  useEffect(() => {
    FetchAllData();
  }, []);

  return (
    <>
      {currentPage === "main" && (
        <div className="flex flex-col w-full max-w-7xl">
          <div className="flex w-full max-w-7xl">
            <FilterHandler />
            <SortHandler />
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 p-4">
            {products.map((product) => (
              <li
                onClick={() => {
                  dispatch(setSelectedProduct(product));
                  dispatch(setCurrentPage("product"));
                }}
                className=" bg-gray-100 overflow-hidden text-left cursor-pointer flex flex-col rounded-sm justify-between border border-gray-200 p-2 shadow-sm"
                key={product.id}
              >
                <section className="flex items-center  flex-col w-full">
                  <div className="flex flex-col border justify-center items-center w-full h-56 pr-6 pl-6 bg-white">
                    <img
                      alt={product.title}
                      className="h-28 object-contain"
                      src={product.image}
                    />
                  </div>
                  <div className="flex justify-start w-full font-bold text-sm text-gray-700 p-4 max-h-10 overflow-hidden font-montserrat">
                    {product.title}
                  </div>
                  <div className="w-full pl-4  font-montserrat">
                    <Ratings rating={product.rating} />
                  </div>
                </section>
                <section className="w-full flex flex-col items-start p-4 "></section>
                <div className="w-full font-bold text-xl pl-4 pr-4 pb-4 font-montserrat">
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
