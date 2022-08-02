import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
  return (
    <>
    <h3 className='text-center'>{props.greeting}</h3>
    <ItemCount initial={1} stock={10} />
    </>
  )
}

export default ItemListContainer