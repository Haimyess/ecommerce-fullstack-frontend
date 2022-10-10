/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";

import logo from "../media/images/Shopy-logo.png";

import LoginModal from "../components/LogInModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Badge from "@mui/material/Badge";

import { LoginModalContext } from "../contexts/LoginModalContext";
import { CartContext } from "../contexts/CartContext";

import SearchBar from "./SearchBar";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap/";
// import Catalogue from "../pages/Catalogue";

function Header({ qty }) {
  const { quantity, setQuantity } = qty;

  console.log(quantity);

  //

  // useEffect(() => {
  //   const products = JSON.parse(window.localStorage.getItem("product"));
  //   if (products) {
  //     setCart(products);
  //   }
  // }, []);
  // useEffect(() => {
  //   const qty = JSON.parse(window.localStorage.getItem("qty"));
  //   if (qty) {
  //     setQuantity(qty);
  //   }
  // }, []);
  ////////////////////////MODAL

  const [show, setShow] = useContext(LoginModalContext);
  const { cart, setCart } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ///////////////////// Closing div when click outside in searchbar
  const searchDivRef = useRef();

  const [isOpen, setIsOpen] = useState(true);

  const handleDivBack = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    // document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleDivBack);
    // document.addEventListener("click", handleDivBack, true);

    document.addEventListener("change", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!searchDivRef.current.contains(e.target)) {
      // console.log(e.target);
      setIsOpen((val) => !val);
    }
  };

  // console.log(cart);

  const cartTotal = () => {
    const quantities = cart.map((product) => {
      return product.quantity;
    });
    // setQuantity(quantities);
    const sum = quantities.reduce((prev, cur) => prev + cur, 0);
    // console.log(sum);
    // setQuantity(sum);
    return sum;
  };

  return (
    <>
      <Navbar bg='light' expand='lg' className='navbar-fix-top bottom-border'>
        <Container fluid className='container'>
          <Link to='/'>
            <div>
              <img className='logo-home' src={logo} alt='' />
            </div>
          </Link>

          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse
            id='navbarScroll'
            className='d-flex justify-content-between'>
            <Nav
              className='my-2 my-lg-0'
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link className='cat-btn' to='/catalogue'>
                {/* <FontAwesomeIcon icon='fa-solid fa-bars' /> */}
                <FontAwesomeIcon icon={faBarsStaggered} /> &nbsp;
                <span>Catalogue</span>
              </Link>

              {/* <NavDropdown title='Location' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Netanya</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>Tel aviv</NavDropdown.Item>

                <NavDropdown.Item href='#action5'>Hadera</NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href='#' disabled>
                Link
              </Nav.Link> */}
            </Nav>

            <SearchBar searchDivRef={searchDivRef} isOpen={isOpen} />
            <div className='d-flex justify-content-md-center '>
              {/* <Link className='cart' to='/cart'>
                Cart <span className='cart-badge'>({cartTotal()})</span>
              </Link> */}
              <Link className='cart color' to='/cart'>
                <Badge badgeContent={cartTotal()} color='primary'>
                  <FontAwesomeIcon icon={faCartShopping} size='xl' />
                </Badge>
                <span>Cart</span>
              </Link>{" "}
              {<LoginModal handleClose={handleClose} />}
              {/* <Button onClick={handleShow} variant='outline-success'></Button> */}
              <div onClick={handleShow} className='login-btn color'>
                <FontAwesomeIcon icon={faUser} size='xl' />
                <span> Login</span>
              </div>
            </div>
            {/* <FontAwesomeIcon icon='fa-solid fa-cart-shopping' /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div>
        <img src='' />
      </div>
      <div>
        <input type='text' />
      </div>
      <div></div> */}
    </>
  );
}

export default Header;
