/** @format */

import React, { createContext, useState } from "react";

export const LoginModalContext = createContext();

export const LoginModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <LoginModalContext.Provider value={[show, setShow]}>
      {children}
    </LoginModalContext.Provider>
  );
};
