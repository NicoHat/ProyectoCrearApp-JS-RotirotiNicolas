import React from 'react'
import { useState } from 'react';


const ItemCount = ({stock, initial}) => {
    let [count, setCount] = useState(1);

    const handleIncrement = () => {
      count >= initial && count < stock
      ? setCount(count + 1)
      : setCount(count + 0);
    }

    const handleDecrement = () => {
      count > initial ? setCount(count - 1) : setCount(count - 0); 
    }

    const reset = () => {
      setCount(1)
    };


  return (
    <div>
      <p>
          {count}
      </p>
      <button type='button' className="btn btn-outline-success" onClick={handleIncrement}>+</button>
      <button type='button' className="btn btn-outline-danger" onClick={handleDecrement}>-</button>
      <button type='button' className='btn btn-outline-warning' onClick={reset}>Reset</button>
    </div>
  )
}

export default ItemCount;
