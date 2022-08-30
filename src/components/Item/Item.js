import React from 'react'
import { Link } from 'react-router-dom'

function Item ({ title, price, img, category, id, author}) {
    return (
      <div className='card' style={{ width: '18rem' }}>
        <img className='card-img-top' src={img} />
          <div className='card-body'>
            <h2 className="card-title">{title}</h2>
            <h4 className='card-text'>{author}</h4>
            <p className="card-text">{category}</p>
            <h3>${price}</h3>
            <Link to={`/detalle/${id}`}>
              <button>Ver detalles</button>
            </Link>
          </div>
      </div>
        
     )
}

export default Item