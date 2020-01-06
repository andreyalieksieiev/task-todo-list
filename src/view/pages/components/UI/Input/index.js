import React from 'react';

const Input = ({ type, value, changed }) => {
  return (
    <input type={type} value={value} onChange={changed}></input>
  )
}

export default Input;