import React from 'react'
import { useState } from 'react';


function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);

    function handleIncrement() {
      count >= initial && count < stock
      ? setCount(count + 1)
      : setCount(count + 0);
    }

    function handleDecrement() {
      count > initial ? setCount(count - 1) : setCount(count - 0); 
    }

    function onAddToCart(){
      if(count >= -1){
        onAdd()
      }
    }

  return (
    <div>
      <p>{count}</p>
      <button type='button' className="btn btn-outline-success" onClick={() => {handleIncrement(); onAddToCart()}}>Añadir un producto</button>
      <button type='button' className="btn btn-outline-danger" onClick={handleDecrement}>Quitar un producto</button>
    </div>
  )
}

export default ItemCount;
