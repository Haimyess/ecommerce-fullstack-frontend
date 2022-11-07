/** @format */

/** @format */

import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { CartContext } from "./contexts/CartContext";
import { LoginModalProvider } from "./contexts/LoginModalContext";
import { ProductsProvider } from "./contexts/ProductsContext";

// Importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importing components
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { Category } from "./pages/Category";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

import SearchPage from "./pages/SearchPage";

import Signup from "./pages/Signup";
import SharedLayout from "../src/layout/SharedLayout";
import Checkout from "./pages/Checkout";
import ThanksPage from "./pages/ThanksPage";
// import { categoriesArray } from "./categoriesArray";

import "./App.css";
// importing this file we are able to access the variables globally, in each on eof the stylesheets that we have.
import "./styles/variables.css";
import { CategoryProvider } from "./contexts/CategoryContext";
import { LoginProvider } from "../src/contexts/LoginContext";

function App() {
  const { cart, setCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  // function handleAdd(product) {
  //   const exist = cart.find((item) => item.product_id === product.product_id);

  //   if (exist) {
  //     setCart(
  //       cart.map((item) =>
  //         item.product_id === product.product_id
  //           ? { ...exist, quantity: exist.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //     // console.log(cart);
  //   }
  // }

  function handleRemove(product) {
    const exist = cart.find((item) => item.product_id === product.product_id);

    if (exist && product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.product_id === product.product_id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  }

  return (
    <div className='App'>
      <LoginProvider>
        <LoginModalProvider>
          <Routes>
            <Route
              path='/'
              element={<SharedLayout qty={{ quantity, setQuantity }} />}>
              <Route
                index
                element={
                  <ProductsProvider>
                    <Home
                    //  onAdd={handleAdd}
                    />
                  </ProductsProvider>
                }
              />

              <Route
                path='/search'
                element={
                  <CategoryProvider>
                    <ProductsProvider>
                      <SearchPage />{" "}
                    </ProductsProvider>
                  </CategoryProvider>
                }
              />

              <Route
                path='/cart'
                element={
                  <Cart
                    // onAdd={handleAdd}
                    onMinus={handleRemove}
                    qty={{ quantity, setQuantity }}
                  />
                }
              />
              <Route path='/catalogue' element={<Catalogue />} />
              <Route
                path='/:type'
                element={
                  <CategoryProvider>
                    {" "}
                    <Category
                      // onAdd={handleAdd}
                      qty={{ quantity, setQuantity }}
                    />
                  </CategoryProvider>
                }
              />
              <Route
                path='/product/:id'
                element={
                  <Product
                    //  onAdd={handleAdd}
                    qty={{ quantity, setQuantity }}
                  />
                }
              />
              <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='/signup' element={<Signup />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/thanks' element={<ThanksPage />} />
          </Routes>
        </LoginModalProvider>
      </LoginProvider>
    </div>
  );
}

export default App;

// import "./App.css";
// import { useState, useEffect } from "react";

// // import * as dotenv from "dotenv";
// // dotenv.config();

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await fetch(
//           // `${process.env.PROXY}/api/products/all`

//           "https://ecommerce-fullstack-backend.herokuapp.com/api/products/all"
//         );
//         const data = await res.json();

//         setProducts(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getProducts();
//   }, []);

//   return (
//     <div className='App'>
//       <div>
//         {products.map((product) => {
//           return (
//             <div key={product.product_id}>
//               <p>{product.product_name}</p>
//               <img src={product.product_img} />
//             </div>
//           );
//         })}
//       </div>
//       <div>Hello</div>
//     </div>
//   );
// }

// export default App;
