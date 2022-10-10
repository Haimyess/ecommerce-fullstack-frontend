/** @format */

/** @format */

import React, { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

function BtnAddToCart(props) {
  const { product } = props;
  const [cart, setCart] = useContext(CartContext);

  function addToCart(product) {
    const exist = cart.find((item) => item.product_id === product.product_id);

    // if (exist) {
    //   setCart(
    //     cart.map(
    //       (item) =>
    //         item.product_id === product.product_id && {
    //           ...exist,
    //           quantity: exist.quantity + 1,
    //         }
    //     )
    //   );
    // } else {
    //   setCart([...cart, { ...product, quantity: 1 }]);
    // }
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
      console.log(cart);
    }
  }
  return (
    <>
      <button onClick={() => addToCart(product)}> Add to cart</button>
    </>
  );
}

export default BtnAddToCart;

// className = "add-btn";
