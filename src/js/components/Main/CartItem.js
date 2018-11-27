import React from 'react';

function CartItem(props){
  const { good } = props;
  return (
    <li>
      <img src="https://via.placeholder.com/178x178" />
      <span>{good.description}</span>
      <button>+</button>
      <button>-</button>
    </li>
  )
}

export default CartItem
