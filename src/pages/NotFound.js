/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

function NotFound() {
  return (
    <div className='notfound-wrapper'>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={"/catalogue"}>Go to Cart </Link>
    </div>
  );
}

export default NotFound;
