import { useRef, useState } from "react";

const useCheck = () => {
  const inputRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const formIsValid = !isValid && isTouched;

  const inputCheck = () => {
    setIsTouched(true);
    if (inputRef.current.value.trim() !== "") {
      return setIsValid(true);
    }
  };

  return {
    inputRef,
    isValid,
    formIsValid,
    inputCheck,
  };
};

export default useCheck;
