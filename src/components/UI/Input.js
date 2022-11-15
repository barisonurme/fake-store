import React, { useState } from "react";

const Input = (props) => {
  const { styles, placeHolder, type, maxLength } = props;
  const keyStrokes = (e) => {
    if (type === "number" && e.target.value.length > maxLength) return;
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
