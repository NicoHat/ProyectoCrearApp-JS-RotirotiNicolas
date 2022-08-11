import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount'

const ItemDetail = (item) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img id="img" variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>ID: {item.id}</Card.Title>
        <Card.Title>Título: {item.title}</Card.Title>
        <Card.Text>Precio: {item.price}</Card.Text>
        <Card.Text>Categoria: {item.category}</Card.Text>
        <Card.Text>Descripcion: {item.description}</Card.Text>
        <ItemCount initial={1} stock={10}/>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail;