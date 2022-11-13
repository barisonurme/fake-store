import React, { useEffect } from "react";
import FilterHandler from "./components/FilterHandler";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/Products/ProductList";
import { SortHandler } from "./components/SortHandler";

function App() {
  useEffect(() => {}, []);

  const headerHeight = "h-14";
  const footerHeight = "h-14";

  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <Header headerHeight={headerHeight} />
      <Footer footerHeight={footerHeight} />
      <div className={headerHeight}></div>

      <div className="flex w-full max-w-7xl">
        <FilterHandler />
        <SortHandler />
      </div>
        <ProductList />
    </div>
  );
}

export default App;
