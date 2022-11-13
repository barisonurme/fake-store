import React, { useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/Products/ProductList";


function App() {
  useEffect(() => {}, []);

  const headerHeight = "h-14";
  const footerHeight = "h-14";

  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <Header headerHeight={headerHeight} />
      <Footer footerHeight={footerHeight} />
      <div className={headerHeight}></div>

        <ProductList />
    </div>
  );
}

export default App;
