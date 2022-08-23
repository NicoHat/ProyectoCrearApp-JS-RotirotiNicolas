import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom"
import { CartContext } from '../CartContext/CartContext'


function ItemDetail (product) {

  const {addItem} = useContext(CartContext)

  const [onCart, setOnCart] = useState(false)

  const onAdd = () => {
    setOnCart(true);
    addItem(product);
  }

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img className='card-img-top' src={product.img} alt="Card image cap" />
        <div className='card-body'>
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">{product.category}</p>
          <h3>{product.price}</h3>
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
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          )}  
        </div>
    </div>
  )
}

export default ItemDetail;