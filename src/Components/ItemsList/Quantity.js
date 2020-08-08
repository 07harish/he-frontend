import React from 'react'

const Quantity = ({ add, sub, quantity, handleQuantity }) => {
  return (
    <div>
      <button onClick={sub}>-</button>
      <input type='number' value={quantity} onChange={handleQuantity}></input>
      <button onClick={add}>+</button>
    </div>
  )
}

export default Quantity
