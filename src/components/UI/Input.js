import React from "react";

const Input = (props) => {
  const { styles, placeHolder } = props;
  const keyStrokes = (e) => {
    props.onInputChange(e.target.value, placeHolder);
  };
  return (
    <input
      onChange={keyStrokes}
      className={`${styles}`}
      placeholder={placeHolder}
    ></input>
  );
};

export default Input;
