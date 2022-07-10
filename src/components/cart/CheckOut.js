import { useRef } from "react";
import useCheck from "../../hooks/useCheck";
import style from "./CheckOut.module.css";

const CheckOut = ({ onConfirm, closeModal }) => {
  const {
    inputRef: nameInputRef,
    isValid: nameValid,
    formIsValid: nameFormIsValid,
    inputCheck: nameCheck,
  } = useCheck();
  const {
    inputRef: streetInputRef,
    isValid: streetValid,
    formIsValid: streetFormIsValid,
    inputCheck: streetCheck,
  } = useCheck();
  const {
    inputRef: postalCodeInputRef,
    isValid: postalCodeValid,
    formIsValid: postalCodeFormIsValid,
    inputCheck: postalCodeCheck,
  } = useCheck();
  const {
    inputRef: cityInputRef,
    isValid: cityValid,
    formIsValid: cityFormIsValid,
    inputCheck: cityCheck,
  } = useCheck();

  const confirmOrder = (e) => {
    e.preventDefault();
    const formIsValid =
      nameValid && streetValid && postalCodeValid && cityValid;

    if (!formIsValid) {
      nameCheck();
      streetCheck();
      postalCodeCheck();
      cityCheck();
      return;
    }

    onConfirm({
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      postalCode: postalCodeInputRef.current.value,
      city: cityInputRef.current.value,
    });
  };

  return (
    <form onSubmit={confirmOrder}>
      <div className={style.inputbox}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          ref={nameInputRef}
          onBlur={nameCheck}
        />
        {nameFormIsValid && <p>You must entered name.</p>}
      </div>
      <div className={style.inputbox}>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          ref={streetInputRef}
          onBlur={streetCheck}
        />
        {streetFormIsValid && <p>You must entered street.</p>}
      </div>
      <div className={style.inputbox}>
        <label htmlFor="postalCode">Postal Code</label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          ref={postalCodeInputRef}
          onBlur={postalCodeCheck}
        />
        {postalCodeFormIsValid && <p>You must entered postal code.</p>}
      </div>
      <div className={style.inputbox}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          ref={cityInputRef}
          onBlur={cityCheck}
        />
        {cityFormIsValid && <p>You must entered city.</p>}
      </div>
      <div className={style.orderButton}>
        <button onClick={closeModal} className={style.close}>
          Close
        </button>
        <button className={style.order}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
