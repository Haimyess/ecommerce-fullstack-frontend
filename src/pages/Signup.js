/** @format */

import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

// import { ShowContext } from "./Header";
import { LoginModalContext } from "../contexts/LoginModalContext";
import LoginModal from "../components/LogInModal";

import "../styles/signup.css";

const SignUp = () => {
  const [show, setShow] = useContext(LoginModalContext);
  // console.log(show);
  // console.log(show);
  const [errorMsg, setErrorMsg] = useState("");
  const [users, setUsers] = useState([]);
  const [user_firstname, setUserFirstName] = useState([]);
  const [user_lastname, setUserLastName] = useState([]);
  const [user_email, setUserEmail] = useState([]);
  const [user_password, setUserPassword] = useState([]);

  // console.log(userValues);
  console.log(users);
  const navigate = useNavigate();

  const postUser = (e) => {
    e.preventDefault();

    fetch("https://ecommerce-backend-abgb.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_firstname,
        user_lastname,
        user_email,
        user_password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setUserFirstName(user_firstname);
        setUserLastName(user_lastname);
        setUserEmail(user_email);
        setUserPassword(user_password);
      })
      .catch((err) => {
        setErrorMsg(err);
        console.log(err);
      });

    // navigate("/");
    // setShow(true); // show modal
  };

  const handleRegisterModal = () => {
    navigate("/");
    setShow(true);
  };

  return (
    <div className='signup-wrapper'>
      <div className='signup-title'>
        <h1>Welcome to E-Commerce</h1>
      </div>
      <div className='signup-container'>
        <div className='signup-sub-container'>
          <div className='signup-form-container'>
            <form onSubmit={postUser} className='signup-form'>
              <div>
                <label>First name</label>
                <input
                  onChange={(e) => setUserFirstName(e.target.value)}
                  type='text'
                  placeholder='First name'
                />
              </div>
              <div>
                <label>Last name</label>
                <input
                  onChange={(e) => setUserLastName(e.target.value)}
                  type='text'
                  placeholder='Last name'
                />
              </div>
              <div>
                <label>Email address</label>
                <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  type='email'
                  placeholder='Enter email'
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  placeholder='Enter password'
                />
              </div>

              {errorMsg ? <p> Email already being used, please login</p> : ""}

              <div>
                <button type='submit'>Sign Up</button>
              </div>
              <p>
                Already registered{" "}
                <button onClick={handleRegisterModal}>sign in?</button>
              </p>
            </form>

            <div className='signup-social-media'>
              <div className='signup-buttons'>
                <button>Sign Up with Google</button>
                <button>Sign Up with Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {show && <LoginModal />}
    </div>
  );
};

export default SignUp;
