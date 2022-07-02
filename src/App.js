import { useState } from "react";

import Cart from "./components/cart/Cart";
import FoodList from "./components/food/FoodList";
import FoodSummary from "./components/layout/FoodSummary";
import Header from "./components/layout/Header";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartAble, setCartAble] = useState(false);

  const openModal = () => {
    setCartAble(true);
  };

  const closeModal = () => {
    setCartAble(false);
  };

  return (
    <CartProvider>
      <Header openModal={openModal} />
      <FoodSummary />
      <FoodList />
      {cartAble === true && <Cart closeModal={closeModal} />}
    </CartProvider>
  );
};

export default App;
