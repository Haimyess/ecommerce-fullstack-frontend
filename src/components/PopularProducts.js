/** @format */

import React, { useState, useContext } from "react";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

// import "../app.css";

import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Testing from "./Testing";

function PopularProducts({ onAdd }) {
  const { products, setProducts, loading } = useContext(ProductsContext);

  const productsToDisplay = products.length;

  // const one = 1;

  // const singleOne = productsToDisplay;

  // const quantityOfSkeletons = [];

  // for (let i = 1; i <= productsToDisplay; i++) {
  //   quantityOfSkeletons.push(i);
  // }

  // console.log(quantityOfSkeletons);

  // const loading = false;
  // console.log(productsToDisplay);

  const limitDisplay = 4;

  const skeletonQuantity = [1, 2, 3, 4];

  return (
    <div className='main-components-wrapper'>
      <div className='products-wrapper'>
        {loading
          ? skeletonQuantity.map((skeleton) => {
              return (
                <Stack key={skeleton} spacing={1}>
                  {/* For variant="text", adjust the height via font-size */}
                  <Skeleton variant='text' sx={{ fontSize: "1rem" }} />
                  {/* For other variants, adjust the size with `width` and `height` */}
                  <Skeleton variant='circular' width={40} height={40} />
                  <Skeleton variant='rectangular' width={210} height={60} />
                  <Skeleton variant='rounded' width={210} height={60} />
                </Stack>
              );
            })
          : products.slice(0, limitDisplay).map((product) => {
              return (
                <ProductCard
                  key={product.product_id}
                  onAdd={onAdd}
                  product={product}
                />
              );

              {
                /* <Testing product={product} />; */
              }
            })}
      </div>
    </div>
  );
}

export default PopularProducts;
