import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShow, setIsShow] = useState(false)

  const showModal = () => {
    setIsShow(true)
  }
  const hideModal = () => {
    setIsShow(false)
  }

  return (
    <CartProvider>
      {isShow && (<Cart onHide={hideModal} />)}
      <Header onShow={showModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
