import React from 'react'
import ItemCount from '../ItemCount'

function ItemDetail ({ title, price, img, category, id}) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img className='card-img-top' src={img} alt="Card image cap" />
        <div className='card-body'>
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{category}</p>
          <h3>{price}</h3>
          <ItemCount stock={10} initial={1} />
        </div>
    </div>
  )
}

export default ItemDetail;