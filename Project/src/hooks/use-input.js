import { useState } from "react";

const useInput = (initialValue) => {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isEdit, setIsEdit] = useState(false);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsEdit(false);
  };

  const onBlurHandler = () => {
    setIsEdit(true);
  };

  return {
    value: enteredValue,
    valueChangeHandler,
    onBlurHandler,
  };
};

export default useInput;
