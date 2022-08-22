import React from 'react'
import { useState } from 'react';


function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);

    function handleIncrement() {
      if((count < stock) && (count >= 0) ){
        setCount(count + 1)
    }
  }

    function handleDecrement() {
      if(count > 1){
        setCount(count - 1)
    }
  }
    function onAddToCart(){
      if(count >= -1){
        onAdd()
      }
    }

  return (
    <div>
      <p>{count}</p>
      <button type='button' className="btn btn-outline-success" onClick={handleIncrement}>Sumar</button>
      <button type='button' className="btn btn-outline-danger" onClick={handleDecrement}>Restar</button>
      <button type='button' className='btn btn-outline-primary' onClick={() => onAddToCart()}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount;