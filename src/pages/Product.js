/** @format */

import React, { useEffect, useState, useContext } from "react";
import { link } from "../link";

import { CartContext } from "../contexts/CartContext";

import "../styles/Category.css";

import { useParams } from "react-router-dom";

// import BtnAddToCart from "../components/BtnAddToCart";

// import BtnAddToCart from "../components/BtnAddToCart";

function Product({ qty }) {
  const { quantity, setQuantity } = qty;
  const [product, setProduct] = useState([]);

  // const { cart, setCart } = useContext(CartContext);

  const { handleAdd } = useContext(CartContext);

  const params = useParams();

  // useEffect(() => {
  //   window.localStorage.setItem("product", JSON.stringify(cart));
  // }, [cart]);

  // useEffect(() => {
  //   window.localStorage.setItem("qty", JSON.stringify(quantity));
  // }, [quantity]);

  // useEffect(() => {
  //   const qty = JSON.parse(window.localStorage.getItem("qty"));
  //   if (qty) {
  //     setQuantity(qty);
  //   }
  // }, []);

  // const AddToCart = (singleProduct) => {
  //   // const exist = cart.find((item) => item.product_id === product.product_id);
  //   // console.log(singleProduct);
  //   setCart([...cart, singleProduct]);
  //   console.log(cart);
  // };

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`/api/products/product/${params.id}`);
      const data = await res.json();

      setProduct(data);
    };
    getProduct();
  }, []);
  return (
    <div>
      {product.map((singleProduct) => {
        return (
          <div className='product-wrapper' key={singleProduct.product_id}>
            <img className='product-img' src={singleProduct.product_image} />

            <div>
              <h2 className='product-title'>{singleProduct.product_name}</h2>
              <p>{singleProduct.product_price}</p>
              {/* <BtnAddToCart product={singleProduct} /> */}
              <p>{singleProduct.product_description}</p>
              {/* <button onClick={() => AddToCart(singleProduct)}>
                Add to Cart
              </button> */}
              <button onClick={() => handleAdd(singleProduct)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
