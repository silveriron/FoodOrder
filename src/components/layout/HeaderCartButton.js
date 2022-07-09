import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "./CartIcon";
import style from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ openModal }) => {
  const [hasCart, setHasCart] = useState(false);
  const ctx = useContext(CartContext);

  const { items } = ctx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHasCart(true);

    const timer = setTimeout(() => {
      setHasCart(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnStyle = `${style.button} ${hasCart ? style.bump : ""}`;

  return (
    <button onClick={openModal} className={btnStyle}>
      <CartIcon className={style.icon} />
      <span>Your Cart</span>
      <span className={style.badge}>{ctx.totalAmount}</span>
    </button>
  );
};

export default HeaderCartButton;
