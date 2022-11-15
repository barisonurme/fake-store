import React, { useEffect, useState } from "react";
import { FetchLimitedProduct } from "../../app/FetchData";
import Ratings from "../Ratings";
import FilterHandler from "./FilterHandler";
import SortHandler from "./SortHandler";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setProducts,
  setSelectedProduct,
} from "../../app/slicer";
import Product from "./Product";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductList = (props) => {
  const dispatch = useDispatch();
  const slice = useSelector((store) => store.uiSlice);
  const currentPage = slice.currentPage;
  const filteredProducts = slice.filteredProducts;
  const [hasMore, setHasMore] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(10);

  const FetchDataStart = async (limit) => {
    // Fetch Limited Products
    const fetchedProducts = await FetchLimitedProduct(limit);
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

    // TODO: Trying solution for infinite scroll work.
    if (document.body.clientHeight <= window.innerHeight) {
      setLimit(20);
    }

    FetchDataStart(limit);
    setLimit((limit) => limit + 10);
    // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const fetchedProducts = await FetchLimitedProduct(limit);

    // Define categories
    let tempCategories = [];
    fetchedProducts.forEach((product) => {
      if (!tempCategories.includes(product.category))
        tempCategories.push(product.category);
    });
    setCategories(tempCategories);

    dispatch(setProducts(fetchedProducts));
    if (filteredProducts.length === 0 || filteredProducts.length < 20) {
      setHasMore(false);
    }
    setLimit(+10);
  };

  return (
    <>
      {currentPage === "main" && (
        <div className="flex flex-col w-full max-w-7xl dark:text-slate-300">
          <div className="flex w-full max-w-7xl z-0">
            <FilterHandler categories={categories} />
            <SortHandler />
          </div>
          <InfiniteScroll
            dataLength={filteredProducts.length} //This is important field to render the next data
            next={fetchData}
            hasMore={hasMore}
            // loader={<div> Loading...</div>}
          >
            <ul className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-4`}>
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
          </InfiniteScroll>
        </div>
      )}
      {currentPage === "product" && <Product />}
      {firstLoading && hasMore && currentPage === "main" && (
        <>
          <div className="fixed bg-sky-500 z-50 bottom-10 p-4 text-white">
            Scroll to Load more Product
          </div>
          <div className="h-[3500px]"></div>
        </>
      )}
    </>
  );
};

export default ProductList;
