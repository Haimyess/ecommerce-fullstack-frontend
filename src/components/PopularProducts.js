/** @format */

import React, { useState, useContext } from "react";

// import "../app.css";

import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Testing from "./Testing";

function PopularProducts({ onAdd }) {
  const [products, setProducts] = useContext(ProductsContext);

  const limitDisplay = 3;

  return (
    <div className='main-components-wrapper'>
      <div className='products-wrapper'>
        {products.slice(0, limitDisplay).map((product) => {
          return <ProductCard onAdd={onAdd} product={product} />;

          {
            /* <Testing product={product} />; */
          }
        })}
      </div>
    </div>
  );
}

export default PopularProducts;
