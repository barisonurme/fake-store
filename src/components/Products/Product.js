import { useSelector } from "react-redux";
import { HiChevronLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setCurrentPage } from "../../app/slicer";

const Product = () => {
  const [zoom, setZoom] = useState(false);
  const selectedProduct = useSelector((store) => store.uiSlice.selectedProduct);
  const disaptch = useDispatch();

  return (
    <>
      <div className="flex flex-row justify-between w-full max-w-7xl mt-4">
        <div
          onClick={() => disaptch(setCurrentPage("main"))}
          className="w-12 h-12 border rounded-xl flex justify-center items-center ml-2 lg:ml-10 lg:mr-10"
        >
          <HiChevronLeft size={25} />
        </div>
        <div className="w-full max-w-7xl font-semibold flex text-lg h-12 justify-center items-center">
          <div className="flex">Product Details</div>
        </div>
        <div className="w-12 h-12 opacity-0"></div>
      </div>
      <div className="w-full justify-start max-w-7xl grid grid-flow-col-1 md:grid-cols-2 gap-8">
        <section
          onClick={() => setZoom(!zoom)}
          className={`${
            zoom ? "fixed w-screen h-full cursor-zoom-out -translate-y-16" : "relative cursor-zoom-in max-h-64 md:max-h-[1000px] "
          } bg-white flex justify-center w-full p-4 md:p-14 z-50 max-w-5xl`}
        >
          <img src={selectedProduct.image} className="object-contain" />
        </section>
        <section className="flex flex-col justify-center items-center w-full p-4 md:p-10">
          <div className="flex w-full font-semibold text-2xl text-left">
            {selectedProduct.title}
          </div>
          <div className="flex w-full font-light text-md mt-2 text-left">
            {selectedProduct.description}
          </div>
          <div className="flex w-full font-bold text-3xl mt-2">
            ${selectedProduct.price}
          </div>
          <div className="flex w-full  select-none">
            <div className="p-2 rounded-lg cursor-pointer">-</div>
            <div className="p-2">1 Piece</div>
            <div className="p-2 rounded-lg cursor-pointer">+</div>
          </div>
          <button className="fixed bottom-16 md:bottom-0 md:relative w-11/12 md:w-full rounded-md p-4 mt-2 bg-sky-500 text-white font-bold text-xl justify-center items-center">
            Add
          </button>
        </section>
      </div>
    </>
  );
};

export default Product;
