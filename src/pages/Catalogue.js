/** @format */

import React from "react";

// import MainProducts from "../components/catalogue/MainProducts";

import Categories from "./Categories";

import "../styles/categories.css";

function Catalogue() {
  return (
    <>
      <div className='catalogue-wrapper'>
        <Categories />
      </div>

      {/* <h1>This are all the products</h1>
    {
      .map(product => {

      })
    } */}
    </>
  );
}

export default Catalogue;
