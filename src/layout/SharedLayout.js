/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../App.css";

function SharedLayout({ qty }) {
  return (
    <>
      <Header qty={qty} />
      <div className='app-container'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default SharedLayout;
