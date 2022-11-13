import React, { useEffect, useState } from "react";
import { FetchAllProduct } from "../../app/FetchData";
import Ratings from "../Ratings";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const FetchAllData = async () => {
    const fetchedProducts = await FetchAllProduct();
    console.log(fetchedProducts);
    setProducts(fetchedProducts);
  };

  useEffect(() => {
    FetchAllData();
  }, []);

  return (
    <div className="flex flex-wrap max-w-7xl justify-evenly">
      {products.map((product) => (
        <div
          className=" text-left cursor-pointer flex flex-col items-center justify-between w-48 max-w-7xl m-4 p-4  rounded-xl  border border-gray-100"
          key={product.id}
        >
          <section className="flex justify-center bg-gray-50 items-center w-full h-44 p-4 m-4">
            <img
              alt={product.title}
              className="h-20 object-contain  mix-blend-multiply"
              src={product.image}
            />
          </section>
          <section className="w-full flex flex-col">
            <div className="font-bold text-sm text-gray-700 h-10 overflow-hidden">
              {product.title}
            </div>
            <div className="w-full">
              <Ratings rating={product.rating} />
            </div>
          </section>
          <div className="w-full font-bold text-xl">${product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
