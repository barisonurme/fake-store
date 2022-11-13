import React, { useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/Products/ProductList";

function App() {
  useEffect(() => {}, []);

  const headerHeight = "h-14";
  const footerHeight = "h-14";

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        className={`fixed top-0 flex justify-center ${headerHeight} w-full bg-gray-900`}
      >
        <Header headerHeight={headerHeight} />
      </div>
      <div
        className={`visible lg:hidden fixed bottom-0 flex justify-center ${headerHeight} w-full bg-gray-900`}
      >
        <Footer footerHeight={footerHeight} />
      </div>
      <div className={headerHeight}></div>

      <ProductList />
      <div className={`${footerHeight} w-full visible lg:hidden `}></div>
    </div>
  );
}

export default App;
