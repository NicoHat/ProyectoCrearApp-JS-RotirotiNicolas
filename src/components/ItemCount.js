import React from 'react'
import { useState } from 'react';
import { btn } from 'bootstrap';


export default function ItemCount(props) {
    let [count, setCount] = useState(1);

    const handleIncrement = () => {
      count >= props.initial && count < props.stock
      ? setCount(count + 1)
      : setCount(count + 0);
    }

    const handleDecrement = () => {
      count > props.initial ? setCount(count - 1) : setCount(count - 0); 
    }

    const reset = () => {
      setCount(1)
    };


  return (
    <div className="counter">
      <span className="counter__output">{count}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={handleIncrement}>+</button>
        <button className="control__btn" onClick={handleDecrement}>-</button>
        <button className="control__btn" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

