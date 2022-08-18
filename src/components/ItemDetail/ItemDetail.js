import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom"

function ItemDetail ({ title, price, img, category, id}) {

  const [onCart, setOnCart] = useState(false)

  const onAdd = () => {
    setOnCart(true);
  }

  return (
    <div className='card' style={{ width: '18rem' }}>
      <img className='card-img-top' src={img} alt="Card image cap" />
        <div className='card-body'>
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{category}</p>
          <h3>{price}</h3>
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
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          )}  
        </div>
    </div>
  )
}

export default ItemDetail;