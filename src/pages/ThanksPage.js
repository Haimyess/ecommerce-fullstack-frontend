/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThanksPage() {
  const [timer, setTimer] = useState(5);
  const navigateHome = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
      if (timer === 0) {
        navigateHome("/");
      }
    }, 1000);
    // Cleaning time out, to avoid memory leaks.
    return () => clearTimeout(timer);
  }, [timer]);

  return (
    <div>
      <h1>Thank you for buying with us</h1>
      <p>Order number: {}</p>
      <p>you will be redirected to Home page in {timer} seconds.</p>
    </div>
  );
}

export default ThanksPage;
