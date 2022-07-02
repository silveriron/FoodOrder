import { useContext } from "react";
import CartContext from "../../store/CartContext";
import style from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const ctx = useContext(CartContext);

  const removeItem = () => {
    ctx.removeItem(item.id);
  };

  const itemAmountUp = () => {
    ctx.itemAmountUp(item.id);
  };
  return (
    <li>
      <div className={style.cartitem}>
        <div>
          <p>
            <b>{item.name}</b>
          </p>
          <span className={style.price}>{`$${item.price}`}</span>
          <span className={style.amount}>{`x ${item.amount}`}</span>
        </div>
        <div>
          <button onClick={removeItem}>-</button>
          <button onClick={itemAmountUp}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
