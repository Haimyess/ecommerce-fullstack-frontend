/** @format */

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Local storage

  // useEffect(() => {
  //   const products = JSON.parse(localStorage.getItem("product"));
  //   if (products) {
  //     setCart(products);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("product", JSON.stringify(cart));
  // }, [cart]);

  const shipping = 20;

  const taxInterest = 0.17;

  const subTotalPrice = cart.reduce(
    (a, c) => a + c.product_price * c.quantity,
    0
  );

  const taxes = taxInterest * subTotalPrice;

  const totalPrice = subTotalPrice + shipping + subTotalPrice * taxInterest;

  function handleAdd(product) {
    const exist = cart.find((item) => item.product_id === product.product_id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.product_id === product.product_id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      // console.log(cart);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        shipping,
        taxInterest,
        subTotalPrice,
        taxes,
        totalPrice,
        handleAdd,
      }}>
      {children}
    </CartContext.Provider>
  );
};
