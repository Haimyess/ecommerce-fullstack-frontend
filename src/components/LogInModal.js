/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { LoginModalContext } from "../contexts/LoginModalContext";
import { LoginContext } from "../contexts/LoginContext";

import "../styles/loginmodal.css";
import { faTruckLoading } from "@fortawesome/free-solid-svg-icons";

function LoginModal({ handleClose }) {
  const [show, setShow] = useContext(LoginModalContext);

  const navigate = useNavigate();

  const [user_email, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [user_password, setUserPassword] = useState("");
  const { user, setUser, setIsLoggedIn, isLoggedIn } = useContext(LoginContext);
  const [disabled, setDisabled] = useState(true);

  // const [errEmail, setErrEmail] = useState("");
  // const [errPass, setErrPass] = useState("");

  const [errMsg, setErrMsg] = useState("");
  // const [errState, setErrState] = useState(false);

  // console.log(isLoggedIn);
  // console.log(user);

  // console.log(isLoggedIn);
  // console.log("email:", errEmail, "pass:", errPass);

  const handleLogin = async () => {
    // e.preventDefault();

    // fetch("/api/auth/", {
    // "https://ecommerce-backend-abgb.onrender.com/api/auth/",
    try {
      const res = await fetch(
        "https://ecommerce-backend-abgb.onrender.com/api/auth/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_email: user_email,
            user_password: user_password,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      // Having the data, we show stored user and close the modal and set the status to logged in and change the navbar
      // setLoading(true);
      // Storing the user
      setUser(data);

      if (data.errMsg) {
        setErrMsg(data.errMsg);
        setShow(true);
        setIsLoggedIn(false);
      } else if (data.msgPass) {
        setErrMsg(data.errMsg);
        setShow(true);
        setIsLoggedIn(false);
      } else {
        setShow(false);
        setIsLoggedIn(true);
        setErrMsg("");
        setUserEmail("");
        setUserPassword("");
      }

      // if (data.notexist) {
      //   setErrEmail(data.notexist);
      //   setShow(true);
      //   setIsLoggedIn(false);
      // } else if (data.msgPass) {
      //   setErrPass(data.msgPass);
      //   setShow(true);
      //   setIsLoggedIn(false);
      // } else if (!data.notExist) {
      //   setErrEmail("");
      // } else {
      //   setShow(false);
      //   setIsLoggedIn(true);
      // }

      // setLoading(false);

      // Setting user as logged in
    } catch (err) {
      // If the password or email are wrong, we will show an error message and the modal should not close nor set the islogged in to true.
      console.log(err);
      // setErrMsg(err);
    }

    // setIsLoggedIn(true);
    // setShow(false);

    // navigate("/");
    // setShow(true); // show modal
  };

  // useEffect(() => {
  //   handleLogin();
  // }, []);

  // const handleState = () => {

  // };

  return (
    <>
      <Modal
        onSubmit={(e) => {
          handleLogin();
          e.preventDefault();
        }}
        show={show}
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Error message */}
            <p className='err-msg'>{errMsg}</p>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={user_email}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              {/* {errEmail} <br /> */}
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
            {/* {errPass} */}

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

            {/* {setErrMsg && <p>Wrong Email or password, please try again.</p>} */}
            {loading ? <p>Loading..</p> : ""}
            <Button
              // onClick={() => setShow(false)}
              className='submit-btn'
              variant='primary'
              type='submit'
              disabled={!user_email || !user_password ? true : false}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
