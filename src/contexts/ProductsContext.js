/** @format */

import { createContext, useEffect, useState } from "react";

import { link } from "../link";

import { useParams } from "react-router-dom";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  //   const [filtered, setFiltered] = useState([]);

  const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://ecommerce-backend-abgb.onrender.com/api/products/all"
        );
        // const res = await fetch(`/api/products/${params.type}`);
        const data = await res.json();

        setProducts(data);
        // console.log(products);
        // setFiltered(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
    // console.log(products);
  });

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {/* value={{ products, setProducts, filtered, setFiltered }}> */}
      {children}
    </ProductsContext.Provider>
  );
};
