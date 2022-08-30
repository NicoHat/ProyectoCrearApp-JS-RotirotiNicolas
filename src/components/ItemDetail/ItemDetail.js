import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom"
import { CartContext } from '../CartContext/CartContext'


function ItemDetail (product) {

  const {addProductToCart} = useContext(CartContext)

  const [onCart, setOnCart] = useState(false)

  const onAdd = (quantityToAdd) => {
    addProductToCart( {
      ...product,
      quantity: quantityToAdd
    });
    setOnCart(true);
  }

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img className='card-img-top' src={product.img} />
        <div className='card-body'>
          <h2 className="card-title">{product.title}</h2>
          <h4 className='card-text'>{product.author}</h4>
          <p className="card-text">{product.category}</p>
          <h3>${product.price}</h3>
          {onCart ? (
            <div>
              <Link to="/cart">
                <button className='btn'>Ver carrito</button>
              </Link>
              <Link to="/">
                <button className='btn'>Volver al shopp</button>
              </Link>
              </div>
          ) : (
            <ItemCount initial={1} stock={product.stock} onAddItemsToCart={onAdd} />
          )}  
        </div>
    </div>
  )
}

export default ItemDetail;