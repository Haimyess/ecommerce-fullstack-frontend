/** @format */

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

// import { Nav } from "react-bootstrap";
// import Footer from "../components/Footer";
// import Header from "../components/Header";

import "../styles/categories.css";

import { CartContext } from "../contexts/CartContext";

function Cart({
  // onAdd,
  onMinus,
  qty,
}) {
  const { quantity, setQuantity } = qty;
  const {
    cart,
    setCart,
    handleAdd,
    shipping,
    taxInterest,
    subTotalPrice,
    taxes,
    totalPrice,
  } = useContext(CartContext);

  // useEffect(() => {
  //   window.localStorage.setItem("product", JSON.stringify(cart));
  // }, [cart]);

  // useEffect(() => {
  //   window.localStorage.setItem("qty", JSON.stringify(quantity));
  // }, [quantity]);

  // useEffect(() => {
  //   const products = JSON.parse(window.localStorage.getItem("product"));
  //   if (products) {
  //     setCart(products);
  //   }
  // }, []);
  // useEffect(() => {
  //   const qty = JSON.parse(window.localStorage.getItem("qty"));
  //   if (qty) {
  //     setQuantity(qty);
  //   }
  // }, []);

  // const shipping = 20;

  // const taxInterest = 0.17;

  // const subTotalPrice = cart.reduce(
  //   (a, c) => a + c.product_price * c.quantity,
  //   0
  // );

  // const taxes = taxInterest * subTotalPrice;

  // const totalPrice = subTotalPrice + shipping + subTotalPrice * taxInterest;

  const onRemove = (id) => {
    const exist = cart.find((item) => {
      return item.product_id === id;
    });

    if (exist) {
      let filterCart = cart.filter((item) => {
        return item.product_id !== id;
      });

      setCart(filterCart);
    }
  };
  return (
    <>
      <div className='cart-product-wrapper'>
        <section className='cart-products-container'>
          {cart.map((item) => {
            return (
              <div className='cart-product' key={item.product_id}>
                <div className='cart-product--img-name'>
                  <img className='cart-product--img' src={item.product_image} />

                  <p className='cart-product--title'>{item.product_name}</p>
                </div>

                <div className='cart-quantity--btns'>
                  <button
                    onClick={() => {
                      onMinus(item);
                    }}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleAdd(item)}>+</button>
                </div>
                <button onClick={() => onRemove(item.product_id)}>
                  Remove
                </button>
                {/* <p className='cart-product--info'>{item.product_description}</p> */}
                <div>
                  <p className='cart-product--price'>
                    ${item.quantity * item.product_price}{" "}
                    {/* <span> ${`${item.product_price} each`}</span> */}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
        <aside className='cart-wrapper-summary'>
          <div className='cart-summary'>
            <h2>Order Summary</h2>
            {/* <p>{total}</p> */}
            <p>
              <strong>Subtotal: </strong>${subTotalPrice.toFixed(2)}
            </p>
            <p>
              <strong>Shipping: </strong>${shipping}
            </p>
            <p>
              <strong>Taxes: </strong>${taxes.toFixed(2)}
            </p>

            <p>
              <strong>Total: </strong>${totalPrice.toFixed(2)}
            </p>
            <br />

            <button>
              <Link
                to={{
                  pathname: "/checkout",
                  state: {},
                }}>
                Checkout
              </Link>
            </button>
          </div>
        </aside>
      </div>
      {/* {cart.length === 0 ? (
          <p>Your cart is empty. Please buy something!</p>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div> {product.product.name}</div>
              </>
            );
          })
        )} */}
      {/* {setCart.map((product) => {
          return (
            <>
              <div>{product.product_name}</div>
            </>
          );
        })}
      </div>
      <div>
        <h1>Order Summary</h1>
      </div> */}
    </>
  );
}
export default Cart;
