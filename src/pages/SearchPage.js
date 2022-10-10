/** @format */

import React from "react";
import Checkbox from "../components/Checkbox";

const SearchPage = () => {
  return (
    <>
      {/* <Header /> */}
      <h1>Search Page</h1>

      <div className='search-container'>
        <div className='filter'>
          <Checkbox />
        </div>

        <div className='search-product'>
          <h2> Fetched products by value </h2>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
