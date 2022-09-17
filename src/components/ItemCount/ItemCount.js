import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';



function ItemCount({initial, stock, onAddItemsToCart}) {
    const [count, setCount] = useState(initial);



    const onAdd = () => {
      if(count > 0){
        onAddItemsToCart(count);
      }
    }
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
    

  return (
    <div>
      <p>{count}</p>
      <Button variant='success' onClick={handleIncrement}>Sumar</Button>
      <Button variant='danger' onClick={handleDecrement}>Restar</Button>
      <hr />
      <Button variant='primary' onClick={onAdd}>Añadir al carrito</Button>
    </div>
  )
}

export default ItemCount;