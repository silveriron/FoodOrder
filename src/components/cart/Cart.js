import CartItem from "./CartItem";
import Modal from "../modal/Modal";
import style from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart = ({ closeModal }) => {
  const ctx = useContext(CartContext);

  const cartItem = ctx.items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  let totalAmount = 0;

  ctx.items.map((item) => {
    totalAmount += item.amount * item.price;
  });

  return (
    <Modal closeModal={closeModal}>
      <ul>{cartItem}</ul>
      <div className={style.amount}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={style.orderButton}>
        <button onClick={closeModal} className={style.close}>
          Close
        </button>
        <button className={style.order}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
