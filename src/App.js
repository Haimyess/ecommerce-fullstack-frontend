/** @format */

import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://ecommerce-fullstack-backend.herokuapp.com/api/products/all"
        );
        const data = await res.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className='App'>
      <div>
        {products.map((product) => {
          return (
            <div key={product.product_id}>
              <p>{product.product_name}</p>
              <img src={product.product_img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
