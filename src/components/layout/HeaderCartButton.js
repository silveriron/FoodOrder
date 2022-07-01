import CartIcon from "./CartIcon";
import style from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={style.button}>
      <CartIcon className={style.icon} />
      <span>Your Cart</span>
      <span className={style.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
