import CartItem from "./CartItem";
import Modal from "../modal/Modal";

const Cart = () => {
  const cartItem = [{ id: "m1", name: "sushi", amount: 1, price: 22.99 }].map(
    (item) => {
      return <CartItem key={item.id} item={item} />;
    }
  );
  return (
    <Modal>
      <ul>{cartItem}</ul>
      <span>Total Amount</span>
      <span>$22.99</span>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
