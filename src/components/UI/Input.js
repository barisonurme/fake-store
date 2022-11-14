import React from "react";

const Input = (props) => {
  const { styles, placeHolder, type, maxLength } = props;
  const keyStrokes = (e) => {
    props.onInputChange(e.target.value, placeHolder);
  };
  return (
    <input
      maxLength={maxLength}
      type={type}
      onChange={keyStrokes}
      className={`${styles}`}
      placeholder={placeHolder}
    ></input>
  );
};

export default Input;
