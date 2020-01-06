import React from 'react';

const Button = ({ name, clicked }) => {
  return (
  <button onClick={clicked}>{name}</button>
  )
}

export default Button;