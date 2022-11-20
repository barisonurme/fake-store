import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { toasterHandler } from "../../app/slicer";

const Toaster = () => {
  const { isToasterActive, toasterMsg, toasterSuccess } = useSelector(
    (store) => store.uiSlice
  );
  const dispatch = useDispatch();
  return (
    <>
      <CSSTransition
        in={isToasterActive}
        classNames="toaster"
        timeout={1000}
        unmountOnExit
        mountOnEnter
        onEntered={() =>
          dispatch(
            toasterHandler({
              status: false,
              msg: toasterMsg,
              success: toasterSuccess,
            })
          )
        }
      >
        <div
          className={`${
            toasterSuccess ? "bg-sky-500" : "bg-rose-500"
          } fixed indent-0 top-16 z-50 p-4 text-white rounded-md w-full max-w-xs justify-center items-center flex`}
        >
          {toasterMsg}
        </div>
      </CSSTransition>
    </>
  );
};

export default Toaster;
