/** @format */

import React, { useState, useContext } from "react";

import { CategoryContext } from "../contexts/CategoryContext";

export default function Sort() {
  const { catgProducts, setCatgProducts } = useContext(CategoryContext);

  const [sort, setSort] = useState("asc");

  //   const sortCompare = () => {
  //     const asc =
  //       a.product_name > b.product_name
  //         ? 1
  //         : a.product_name < b.product_name
  //         ? -1
  //         : 0;

  //     const desc =
  //       a.product_name < b.product_name
  //         ? 1
  //         : a.product_name > b.product_name
  //         ? -1
  //         : 0;
  //   };

  const handleSort = (value) => {
    console.log(value);

    setSort(value);

    if (sort === "asc") {
      const sortArr = [...catgProducts].sort((a, b) =>
        a.product_name < b.product_name
          ? 1
          : a.product_name > b.product_name
          ? -1
          : 0
      );
      setCatgProducts(sortArr);
    }
    if (sort === "desc") {
      const sortArr = [...catgProducts].sort((a, b) =>
        a.product_name > b.product_name
          ? 1
          : a.product_name < b.product_name
          ? -1
          : 0
      );
      setCatgProducts(sortArr);
    }

    if (sort === "htl") {
      const sortArr = [...catgProducts].sort((a, b) =>
        a.product_price > b.product_price
          ? 1
          : a.product_price < b.product_price
          ? -1
          : 0
      );
      setCatgProducts(sortArr);
    }
    if (sort === "lth") {
      const sortArr = [...catgProducts].sort((a, b) =>
        a.product_price < b.product_price
          ? 1
          : a.product_price > b.product_price
          ? -1
          : 0
      );
      setCatgProducts(sortArr);
    }
  };

  return (
    <select onChange={(e) => handleSort(e.target.value)}>
      <option value={"asc"}>Name A-Z </option>
      <option value={"desc"}>Name Z-A </option>
      <option value={"lth"}>Price Low to High</option>
      <option value={"htl"}>Price High to Low </option>
    </select>
  );
}
