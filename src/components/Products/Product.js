import { useSelector } from "react-redux";
import { HiChevronLeft } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  setCurrentPage,
  addProductToCart,
  toasterHandler,
} from "../../app/slicer";
import { toast } from "react-toastify";

const Product = () => {
  const [zoom, setZoom] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const selectedProduct = useSelector((store) => store.uiSlice.selectedProduct);
  const disaptch = useDispatch();

  const quantityHandler = (operation) => {
    switch (operation) {
      case "increase":
        setQuantity(quantity + 1);
        break;
      case "decrease":
        if (quantity === 1) return;
        setQuantity(quantity - 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="p-4 w-full m-auto justify-start max-w-7xl grid grid-flow-col-1 md:grid-cols-2 gap-1 md:gap-8  dark:text-slate-300">
        {zoom && (
          <div
            onClick={() => setZoom(false)}
            className="fixed top-0 left-0 w-full h-screen bg-black/90 z-40"
          ></div>
        )}
        <section
          onClick={() => setZoom(!zoom)}
          className={`${
            zoom
              ? "bg-white  z-50 fixed w-screen h-[calc(100vh-360px)] top-1/2 left-1/2 cursor-zoom-out -translate-x-1/2 -translate-y-1/2 m-auto inset-x-0 inset-y-0 "
              : "bg-gray-100 z-0 relative cursor-zoom-in max-h-64 md:max-h-[1000px] "
          } flex mt-1 md:mt-4 justify-center w-full p-4 md:p-14 max-w-5xl border`}
        >
          <img
            alt={selectedProduct.title}
            src={selectedProduct.image}
            className="object-contain mix-blend-multiply"
          />
        </section>
        <section className="flex flex-col justify-center items-center w-full p-4 md:p-10">
          <div className="flex w-full font-semibold text-lg lg:text-4xl text-left">
            {selectedProduct.title}
          </div>
          <div className="flex w-full font-light text-xs lg:text-lg mt-2 text-left">
            {selectedProduct.description}
          </div>
          <div className="flex w-full items-center font-bold text-3xl mt-2">
            ${selectedProduct.price}
          </div>
          <div className="flex w-full select-none align-middle items-center">
            <div
              onClick={() => quantityHandler("increase")}
              className="flex justify-center w-8 h-8 rounded-full cursor-pointer text-xl border"
            >
              +
            </div>
            <div className="text-xl m-2">{quantity} Piece</div>
            <div
              onClick={() => quantityHandler("decrease")}
              className="flex justify-center w-8 h-8 rounded-full cursor-pointer text-xl  border"
            >
              -
            </div>
          </div>
          <button
            onClick={() => {
              disaptch(addProductToCart({ selectedProduct, quantity }));
              disaptch(setCurrentPage("main"));
              disaptch(
                toasterHandler({ status: true, msg: "Product Added to Cart", success: true })
              );
            }}
            className="fixed bottom-[100px] md:bottom-0 md:relative w-11/12 md:w-full rounded-md p-2 mt-2 bg-sky-500 text-white font-bold text-xl justify-center items-center"
          >
            <div className="text-xs">
              Total: ${(selectedProduct.price * quantity).toFixed(2)}
            </div>
            Add to Cart
          </button>
        </section>
        <div className="w-full h-24"></div>
      </div>
    </>
  );
};

export default Product;
