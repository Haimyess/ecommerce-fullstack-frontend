/** @format */

import React, { useState } from "react";

const Checkbox = (props) => {
  const { id, value, onChange, name, quantity } = props;
  // console.log(quantity);

  return (
    <>
      <label className='checkbox-label'>
        <input
          id={id}
          type='checkbox'
          onChange={onChange}
          name={name}
          value={value}
          className='checkbox-input'
        />
        {name}
        {/* {Object.values(quantity)} */}
      </label>
    </>
  );
};

export default Checkbox;
