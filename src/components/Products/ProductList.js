import React, { useEffect, useState } from "react";
import { FetchAllProduct } from "../../app/FetchData";
import Ratings from "../Ratings";
import FilterHandler from "./FilterHandler";
import SortHandler from "./SortHandler";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
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
    <div className="flex flex-col w-full max-w-7xl">
      <div className="flex w-full max-w-7xl ml-4 mr-4 pl-4 pr-4">
        <FilterHandler />
        <SortHandler />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-5">
        {products.map((product) => (
          <li
            className="text-left cursor-pointer flex flex-col items-center justify-between w-full max-w-7xl rounded-xl  border border-gray-200"
            key={product.id}
          >
            <section className="flex justify-center bg-gray-50 items-center w-full h-44 p-4">
              <img
                alt={product.title}
                className="h-20 object-contain  mix-blend-multiply"
                src={product.image}
              />
            </section>
            <section className="w-full flex flex-col justify-start align-top items-start p-4 ">
              <div className="font-bold text-sm text-gray-700 max-h-10 overflow-hidden">
                {product.title}
              </div>
              <div className="w-full">
                <Ratings rating={product.rating} />
              </div>
            </section>
            <div className="w-full font-bold text-xl pl-4 pr-4 pb-4">
              ${product.price}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
