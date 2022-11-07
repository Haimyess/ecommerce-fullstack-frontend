/** @format */

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { LoginModalContext } from "../contexts/LoginModalContext";
import { LoginContext } from "../contexts/LoginContext";

function LoginModal({ handleClose }) {
  console.log(handleClose);
  // console.log(typeof show);
  const [show, setShow] = useContext(LoginModalContext);

  console.log(show);

  const navigate = useNavigate();

  const [user_email, setUserEmail] = useState("");
  const [user_password, setUserPassword] = useState("");
  const { user, setUser, setIsLoggedIn, isLoggedIn } = useContext(LoginContext);

  console.log(isLoggedIn);
  console.log("email:", user_email, "pass:", user_password);

  const handleLogin = (e) => {
    e.preventDefault();

    // fetch("/api/auth/", {
    fetch("https://ecommerce-backend-abgb.onrender.com/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: user_email,
        user_password: user_password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setIsLoggedIn(true);
        if (isLoggedIn) setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/");
    // setShow(true); // show modal
  };

  return (
    <>
      <Modal onSubmit={handleLogin} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={user_email}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={user_password}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </Form.Group>

            <p>
              Don't have an account?
              <Link
                // show={show}
                // setshow={setShow}
                to='/Signup'
                onClick={handleClose}>
                Sign up
              </Link>
            </p>

            <Button variant='primary' type='submit'>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
