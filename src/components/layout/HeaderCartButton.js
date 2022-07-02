import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "./CartIcon";
import style from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ openModal }) => {
  const ctx = useContext(CartContext);

  return (
    <button onClick={openModal} className={style.button}>
      <CartIcon className={style.icon} />
      <span>Your Cart</span>
      <span className={style.badge}>{ctx.totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
