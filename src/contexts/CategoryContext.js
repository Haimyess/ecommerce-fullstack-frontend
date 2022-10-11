/** @format */

import React, { useState, useContext, createContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [catgProducts, setCatgProducts] = useState([]);

  const [checkBoxBrand, setCheckBoxBrand] = useState([]);

  const [updatedCheckboxes, setUpdatedCheckboxes] = useState([]);

  const [checkBoxType, setCheckBoxType] = useState([]);

  return (
    <CategoryContext.Provider
      value={{
        setCatgProducts,
        catgProducts,
        checkBoxBrand,
        setCheckBoxBrand,
        updatedCheckboxes,
        setUpdatedCheckboxes,
        checkBoxType,
        setCheckBoxType,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};
