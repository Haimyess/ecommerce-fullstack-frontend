/** @format */

import React, { useEffect, useState, useContext, useRef } from "react";

import { link } from "../link";

import { Form, FormControl, InputGroup } from "react-bootstrap/";
import { Link } from "react-router-dom";
// import OutsideClickHandler from "react-outside-click-handler";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../styles/searchbar.css";

const SearchBar = ({ searchDivRef, isOpen }) => {
  const [searchState, setSearchState] = useState("");

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    try {
      const getAllProducts = async () => {
        const res = await fetch(`${link}/api/products/all`);
        const data = await res.json();
        setAllProducts(data);

        // setFilterAllProducts(data); //copy of the allProducts
      };

      getAllProducts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  ////Here we are using values from user and we are going to fetch DB based on these values
  const handleSearch = (e) => {
    setSearchState(e.target.value);
  };

  //////Getting
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const displayProducts = () => {
    ////////trying to display a div - Results not found

    // if (!allProducts.includes(searchState)) {
    //   return <div className="no-results-search">Results not found!</div>;

    //   ///////This works without if() (56)
    // } else if (allProducts.includes(searchState)) {

    return (
      <div className='show-search-products'>
        {allProducts
          .filter((nameProduct) => {
            return nameProduct.product_name
              .toLowerCase()
              .includes(searchState.toLowerCase());
            // }
          })
          .map((product) => {
            return (
              <div key={product.product_id}>
                <Link to={`/product/${product.product_id}`}>
                  {product.product_name}

                  <img
                    className='img-search-product'
                    src={product.product_image}></img>
                </Link>

                <div>{product.product_price}</div>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit} className='form'>
          <InputGroup>
            <FormControl
              className='search-color'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={handleSearch}
            />
            <div className='magnif-glass-container'>
              <FontAwesomeIcon
                className='magnif-glass'
                icon={faMagnifyingGlass}
              />
            </div>
          </InputGroup>
        </Form>

        <div
          style={{ display: !isOpen ? "none" : "block" }}
          className='search-list'
          ref={searchDivRef}>
          {searchState !== "" ? displayProducts() : ""}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
