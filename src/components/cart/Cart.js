import CartItem from "./CartItem";
import Modal from "../modal/Modal";
import style from "./Cart.module.css";
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CheckOut from "./CheckOut";
import useHttp from "../../hooks/use-http";

const Cart = ({ closeModal }) => {
  const ctx = useContext(CartContext);
  const [isCheck, setIsCheck] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { fetchApi } = useHttp();

  const cartItem = ctx.items.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  let totalAmount = 0;

  ctx.items.map((item) => {
    totalAmount += item.amount * item.price;
  });

  const order = () => {
    setIsCheck(true);
  };

  const submitOrder = async (userData) => {
    setIsSubmit(true);
    await fetchApi({
      url: "https://food-order-420fb-default-rtdb.firebaseio.com/order.json",
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: ctx.items,
      }),
    });
    setIsSubmit(false);
    setDidSubmit(true);
    ctx.clearItem();
  };

  const cartorder = (
    <>
      <ul>{cartItem}</ul>
      <div className={style.amount}>
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      {isCheck && <CheckOut onConfirm={submitOrder} closeModal={closeModal} />}
      {!isCheck && (
        <div className={style.orderButton}>
          <button onClick={closeModal} className={style.close}>
            Close
          </button>
          <button onClick={order} className={style.order}>
            Order
          </button>
        </div>
      )}
    </>
  );

  const isSubmittingModal = <p>Sending order data...</p>;

  const didSubmitModal = (
    <>
      <p>Successfully sent the order!</p>
      <div className={style.orderButton}>
        <button onClick={closeModal} className={style.close}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal closeModal={closeModal}>
      {!isSubmit && !didSubmit && cartorder}
      {isSubmit && !didSubmit && isSubmittingModal}
      {!isSubmit && didSubmit && didSubmitModal}
    </Modal>
  );
};

export default Cart;
