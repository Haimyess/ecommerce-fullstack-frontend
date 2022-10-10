/** @format */

import { useState, useEffect, createContext, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { link } from "../link";

import { CartContext } from "../contexts/CartContext";

import React from "react";
// import App from "../App";

// Importing styles
import "../styles/categories.css";
import "../styles/Category.css";

import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
// import Cart from "./Cart";

export const CatgContext = createContext();

export const Category = ({ onAdd, qty }) => {
  const { quantity, setQuantity } = qty;
  // console.log(quantity);
  const { cart, setCart } = useContext(CartContext);
  // console.log("category", cart);
  /////////////////////////////////////////////////
  const [catgProducts, setCatgProducts] = useState([]);

  const [checkBoxBrand, setCheckBoxBrand] = useState([]);

  const [updatedCheckboxes, setUpdatedCheckboxes] = useState([]);

  const [checkBoxType, setCheckBoxType] = useState([]);

  const [searchArray, setSearchArray] = useState([]);

  // const [productsQuantity, setProductsQuantity] = useState("");

  const params = useParams();

  useEffect(() => {
    window.localStorage.setItem("product", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // setQuantity();
    window.localStorage.setItem("qty", JSON.stringify(quantity));
  }, [quantity]);

  // useEffect(() => {
  //   const qty = JSON.parse(window.localStorage.getItem("qty"));
  //   if (qty) {
  //     setQuantity(qty);
  //   }
  // }, []);

  // useEffect(() => {
  //   const products = JSON.parse(localStorage.getItem("product"));
  //   if (products) {
  //     setCart(products);
  //   }
  // }, []);

  console.log(catgProducts.length);

  const getProducts = async () => {
    try {
      const res = await fetch(`${link}/api/products/${params.type}`);
      const data = await res.json();
      ////////////////////////////////////////////

      // const brands = data.map((productBrand) => {
      //   return {
      //     brand: productBrand.product_brand,
      //     id: productBrand.product_id,
      //   };
      // });

      const uniqueBrands = [
        ...new Map(
          data.map((brand) => [brand["product_brand"], brand])
        ).values(),
      ];

      const uniqueTypes = [
        ...new Map(
          data.map((types) => [types["product_type"], types])
        ).values(),
      ];

      setCatgProducts(data);
      setSearchArray(data);
      setUpdatedCheckboxes(data);
      setCheckBoxBrand(uniqueBrands);
      setCheckBoxType(uniqueTypes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className='category-title'>{params.type}</h1>
      {catgProducts.length === 0 ? "" : <p>{catgProducts.length} Products</p>}

      {/* <div> */}
      <div className='category-container'>
        <aside className='category-aside '>
          <CatgContext.Provider
            value={{
              setCatgProducts,
              catgProducts,
              checkBoxBrand,
              setCheckBoxBrand,
              updatedCheckboxes,
              setUpdatedCheckboxes,
              checkBoxType,
              setCheckBoxType,
            }}>
            <Filter />
          </CatgContext.Provider>
        </aside>

        <div className='category-wrapper'>
          {catgProducts.map((product, index) => {
            return (
              <ProductCard key={index} onAdd={onAdd} product={product} />
              /* <div
                className='product-card'
                key={product.product_id}
                id={product.product_id}>
                <Link to={`/product/${product.product_id}`}>
                  <img className='img-card' src={product.product_image} />
                  <h3 className='title-card'>{product.product_name}</h3>
                </Link>
                <p>{product.product_brand}</p>
                <p>{product.product_name}</p>
                <p>{product.product_description}</p>
                <p>${product.product_price}</p>

                <button onClick={() => onAdd(product)}>Add to Cart</button>
              </div> */
            );
          })}
        </div>
      </div>
    </div>
  );
};
