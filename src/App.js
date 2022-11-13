import React, { useEffect, useState } from "react";
import FilterHandler from "./components/FilterHandler";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SortHandler } from "./components/SortHandler";

function App() {
  useEffect(() => {}, []);

  const headerHeight = "h-14";
  const footerHeight = "h-14";

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Header headerHeight={headerHeight} />
      <Footer footerHeight={footerHeight} />
      <div className={headerHeight}></div>

      <div className="flex w-full max-w-7xl">
        <FilterHandler />
        <SortHandler />
      </div>
    </div>
  );
}

export default App;
