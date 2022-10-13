/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider";

import "../styles/home.css";

import categories from "../media/categoriesHome";

import PopularProducts from "../components/PopularProducts";

function Home({ onAdd }) {
  return (
    <main className='main-wrapper'>
      <div className='slider-container'>
        <Slider />
      </div>
      <h3 className='categories-home-title'>Special Categories</h3>
      <div className='categories-main'>
        {categories.slice(0, 5).map((category) => {
          return (
            <div className='category-home' key={category.id}>
              <Link className='link-category-home' to={category.link}>
                <div className='image-container'>
                  <img className='category-img-home' src={category.image} />
                </div>
                <p className='name-categories-home'>{category.title}</p>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Popular products */}
      {/* <div className='popular-products'> */}
      <h3 className='categories-home-title'>Popular Products</h3>
      {/* </div> */}

      <PopularProducts onAdd={onAdd} />

      {/* <Banner />
      <Grid /> */}
    </main>
  );
}

export default Home;
