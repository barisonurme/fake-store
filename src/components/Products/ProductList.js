import React, { useEffect, useState } from "react";
import { FetchAllProduct } from "../../app/FetchData";

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
        <div className="flex flex-col items-center w-48 max-w-7xl border m-1 p-4" key={product.id}>
          <section className="flex justify-center items-center border rounded-xl w-24 h-24 m-4">
            <img className="h-20 object-contain" src={product.image} />
          </section>
          <section className="w-full flex flex-col">
            <div className="font-bold text-center">{product.title}</div>
            {/* <div className="text-xs w-4/6">{product.description}</div> */}
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
