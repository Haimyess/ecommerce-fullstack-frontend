/** @format */

import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import { Link } from "react-router-dom";

import "../styles/productCard.css";

// To display the popular products in the near future, we are planning on counting the number of click =s that are been made in each of the prodcut card depeneding on the product_id tageting the component.

const ProductCard = ({
  product,
  // onAdd
}) => {
  const { handleAdd } = useContext(CartContext);
  // const { product } = product;
  // console.log(props);

  return (
    <div className='product-card-wrapper'>
      <div className='card'>
        <Link className='hover' to={`/product/${product.product_id}`}>
          {/* image */}
          <div className='product-image-wrapper'>
            <img className='product-img' src={product.product_image} />
          </div>
          {/* info */}
          <div className='product-card-info'>
            <h3 className='product-title'>{product.product_name}</h3>
            {/* <p className='product-info'>{product.product_description}</p> */}
            <p className='product-price'>${product.product_price}</p>
          </div>
          {/* button */}
        </Link>
        <button
          className='product-btn'
          onClick={
            () => handleAdd(product)
            // onAdd(product)
          }>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
