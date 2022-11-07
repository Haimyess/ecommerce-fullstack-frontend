/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";

import logo from "../media/images/Shopy-logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import LoginModal from "../components/LogInModal";
import SearchBar from "./SearchBar";

import { LoginModalContext } from "../contexts/LoginModalContext";
import { CartContext } from "../contexts/CartContext";
import { LoginContext } from "../contexts/LoginContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Badge from "@mui/material/Badge";

import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap/";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
// import Catalogue from "../pages/Catalogue";

function Header({ qty }) {
  const { quantity, setQuantity } = qty;

  const { isLoggedIn, user } = useContext(LoginContext);
  console.log(user);

  const userName = user?.map((name) => {
    return name.user_firstname;
  });

  // const [userName, setUserName] = useState("");

  const [showDrop, setShowDrop] = useState(false);

  // console.log(user[0].user_firstname);

  // console.log(quantity);

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

  // const [clickTarget, setClickTarget] = useSatte('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ///////////////////// Closing div when click outside in searchbar
  const searchDivRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  const handleDivBack = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleDivBack);
    // document.addEventListener("click", handleDivBack, true);

    document.addEventListener("change", handleClickOutside, true);
  }, []);
  // }, [clickTarget]);

  const handleClickOutside = (e) => {
    if (!searchDivRef.current.contains(e.target)) {
      // console.log(e.target);
      setIsOpen(false);
      // setIsOpen((val) => !val);
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

            <SearchBar
              searchDivRef={searchDivRef}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
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
              {isLoggedIn ? (
                <div>
                  <button onClick={() => setShowDrop(!showDrop)}>
                    {`Hello, ${userName}`}
                  </button>

                  {showDrop && (
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}>
                      <nav aria-label='main mailbox folders'>
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <InboxIcon />
                              </ListItemIcon>
                              <ListItemText primary='Inbox' />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemIcon>
                                <DraftsIcon />
                              </ListItemIcon>
                              <ListItemText primary='Drafts' />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                      <Divider />
                      <nav aria-label='secondary mailbox folders'>
                        <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText primary='Trash' />
                            </ListItemButton>
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemButton component='a' href='#simple-list'>
                              <ListItemText primary='Spam' />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </nav>
                    </Box>
                  )}
                </div>
              ) : (
                <div onClick={handleShow} className='login-btn color'>
                  <FontAwesomeIcon icon={faUser} size='xl' />
                  <span> Login</span>
                </div>
              )}
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
