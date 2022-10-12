/** @format */

import React, { useState, useContext, useEffect } from "react";

import { CategoryContext } from "../contexts/CategoryContext";

export default function Sort() {
  const { catgProducts, setCatgProducts } = useContext(CategoryContext);
  // const [data, setData] = useState([]);

  // console.log(data);
  const [sortType, setSortType] = useState("asc");
  const handleSort = (value) => {
    setSortType(value);
    if (sortType === "desc") {
      const sortArrName = [...catgProducts].sort((a, b) =>
        a.product_name < b.product_name
          ? 1
          : a.product_name > b.product_name
          ? -1
          : 0
      );
      setCatgProducts(sortArrName);
    }
    if (sortType === "asc") {
      const sortArrName = [...catgProducts].sort((a, b) =>
        a.product_name > b.product_name
          ? 1
          : a.product_name < b.product_name
          ? -1
          : 0
      );
      setCatgProducts(sortArrName);
    }

    if (sortType === "lth") {
      const sortArrPrice = [...catgProducts].sort((a, b) => {
        console.log(a.product_price);

        return a.product_price > b.product_price
          ? 1
          : a.product_price < b.product_price
          ? -1
          : 0;
      });
      setCatgProducts(sortArrPrice);
    }

    if (sortType === "htl") {
      const sortArrPrice = [...catgProducts].sort((a, b) =>
        a.product_price < b.product_price
          ? 1
          : a.product_price > b.product_price
          ? -1
          : 0
      );
      setCatgProducts(sortArrPrice);
    }
  };

  useEffect(() => {
    handleSort(sortType);
  }, [sortType]);

  return (
    <select onChange={(e) => handleSort(e.target.value)}>
      <option value={"asc"}>Name A-Z </option>
      <option value={"desc"}>Name Z-A </option>
      <option value={"lth"}>Price Low to High</option>
      <option value={"htl"}>Price High to Low </option>
    </select>
  );
}

//  const typesAs = {
//         nameAs: "product_name",
//         priceAs: "product_price",
//       };
// const typesDes = {
//   nameDes: "product_name",
//   priceDes: "product_price",
// };

// console.log(types["ascending"] === "asc");

// const sortProperty = types[value];

// const sortedAsc = [...catgProducts].sort(
//   (a, b) => b[typesAs[value]] - a[typesAs[value]]
// );

// const sortedDesc = [...catgProducts].sort(
//   (a, b) => b[sortProperty] - a[sortProperty]
// );
// console.log(sorted);
// if(sortedType === "name" || "")

//       sortedAsc.includes(('name' || "price") ? sortedAsc : sortedDesc)
