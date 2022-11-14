import React from "react";

const Input = (props) => {
  const { style, type } = props;
  return <input type={type} className={`${style}`} />;
};

export default Input;
