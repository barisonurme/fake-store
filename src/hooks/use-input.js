import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim() === "") setIsEmpty(true);
    else {
      setIsEmpty(false);
    }
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
    setIsFocused(false);
  };
  const focusHandler = (event) => {
    setIsFocused(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    isEmpty,
    isFocused,
    valueChangeHandler,
    inputBlurHandler,
    focusHandler,
  };
};

export default useInput;
