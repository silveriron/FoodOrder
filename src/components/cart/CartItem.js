import style from "./CartItem.module.css";

const CartItem = ({ item }) => {
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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
