/** @format */
import React from "react";
import { link } from "../link";

import { Link } from "react-router-dom";

import "../styles/categories.css";

function Categories() {
  const gridCategories = [
    { id: 1, name: "Fruits", class: "fruits" },
    { id: 2, name: "Cereals", class: "cereals" },
    { id: 3, name: "Grains", class: "grains" },
    { id: 4, name: "Alcohol", class: "alcohol" },
    { id: 5, name: "Vegan", class: "vegan" },
    { id: 6, name: "Drinks", class: "drinks" },
    { id: 7, name: "Meat", class: "meat" },
    { id: 8, name: "Dairy", class: "dairy" },
    { id: 9, name: "Vegetables", class: "vegetables" },
  ];
  return (
    <div className='grid-wrapper'>
      {gridCategories.map((category) => {
        return (
          <Link
            key={category.id}
            to={`/${category.name}`}
            className={`grid-item  ${category.class}`}>
            <span className='title-cat'>{category.name}</span>{" "}
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;

{
  /* <Link to={`/${category.product_category}`}>
                <h3>{category.product_category}</h3>
              </Link> */
}
