import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let nextItems = [];
    if (state.items.filter((item) => item.id === action.item.id).length > 0) {
      nextItems = state.items.map((item) => {
        if (item.id === action.item.id) {
          item.amount += action.item.amount;
        }
        return item;
      });
    } else {
      nextItems = state.items.concat(action.item);
    }
    const nextTotalAmount = state.totalAmount + action.item.amount;
    return {
      items: nextItems,
      totalAmount: nextTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const items = state.items.map((item) => {
      if (item.id === action.id) {
        item.amount -= 1;
      }
      return item;
    });
    const nextItems = items.filter((item) => item.amount > 0);
    return {
      items: nextItems,
      totalAmount: state.totalAmount - 1,
    };
  }
  if (action.type === "AMOUNTUP") {
    const nextItems = state.items.map((item) => {
      if (item.id === action.id) {
        item.amount += 1;
      }
      return item;
    });
    const nextTotalAmount = state.totalAmount + 1;
    return {
      items: nextItems,
      totalAmount: nextTotalAmount,
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartSate, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItem = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const itemAmountUp = (id) => {
    dispatchCart({ type: "AMOUNTUP", id: id });
  };

  const cartContext = {
    items: cartSate.items,
    totalAmount: cartSate.totalAmount,
    addItem,
    removeItem,
    itemAmountUp,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
