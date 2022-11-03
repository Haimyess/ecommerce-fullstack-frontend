/** @format */

import React, { useState, useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";

// import Checkbox from "../components/Checkbox";

import "../styles/searchpage.css";

import { ProductsContext } from "../contexts/ProductsContext";

import { useLocation } from "react-router-dom";
// import Filter from "../components/Filter";

const SearchPage = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const location = useLocation();

  const term = location.state.search.searchState;

  // console.log(term);
  // console.log(products.filter((item) => item.product_name.includes(term);

  // console.log(
  //   products.filter((product) =>
  //     product.product_name
  //       .toLowerCase()
  //       .includes(term.toLowerCase())
  //       .map((item) => {
  //         return item.product_name;
  //       })
  //   )
  // );
  // Working  -->

  // console.log(
  //   products.map((product) =>
  //     product.product_name.toLowerCase().includes(term.toLowerCase())
  //   )
  // );

  // -------------

  // console.log(term);
  // const { state } = useLocation();

  // const { searchState } = state.search;

  // console.log(products);

  const displaySearchProducts = () => {
    // console.log(term);
    const filter = products
      .filter((product) => {
        return product.product_name.toLowerCase().includes(term.toLowerCase());
      })
      .map((item) => {
        return <ProductCard key={item.product_id} product={item} />;
      });

    return filter;

    // console.log(filter);
  };

  // useEffect(() => {
  //   displaySearchProducts(term);
  // }, [term]);

  // const [searchProducts, setSearchProducts] = useState([]);
  // console.log(searchProducts);

  // Fetch
  // const fetchSearch = async () => {
  //   try {
  //     const res = await fetch(
  //       `/api/products/search?q=${location.state.search.searchState}`
  //     );
  //     const data = await res.json();

  //     setSearchProducts(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   fetchSearch();
  // }, [location.state.search.searchState]);

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

          {/* <Filter /> */}

          <div className='display-products'>
            {displaySearchProducts()}
            {/* {searchProducts.map((product) => {
              return <ProductCard key={product.product_id} product={product} />;
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
