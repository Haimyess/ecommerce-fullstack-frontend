/** @format */

import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// Adding comment to test

import "../styles/productCard.css";
function Testing({ product }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className='product-image-container'>
          <Card.Img variant='top' src={product.product_image} />
        </div>
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Text>{product.product_description}</Card.Text>
          <Card.Text>{product.product_price}</Card.Text>
          <Button variant='primary'>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Testing;
