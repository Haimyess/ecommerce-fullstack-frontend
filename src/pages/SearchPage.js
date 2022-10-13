/** @format */

import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

import Checkbox from "../components/Checkbox";

import { useLocation } from "react-router-dom";

const SearchPage = () => {
  // const { state } = useLocation();

  // const { searchState } = state.search;

  const location = useLocation();

  const [searchProducts, setSearchProducts] = useState([]);
  console.log(searchProducts);

  // Fetch
  const fetchSearch = async () => {
    try {
      const res = await fetch(
        `/api/products/search?q=${location.state.search.searchState}`
      );
      const data = await res.json();

      setSearchProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSearch();
  }, [location.state.search.searchState]);

  return (
    <>
      {/* <Header /> */}
      <h1>Search Page</h1>

      <div className='search-container'>
        {/* <div className='filter'>
          <Checkbox />
        </div> */}

        <div className='search-product'>
          <h2> Searching for '{location.state.search.searchState}'</h2>

          {/* Map */}

          <div>
            {searchProducts.map((product) => {
              return <ProductCard key={product.product_id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
