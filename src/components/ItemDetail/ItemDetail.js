import React, { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom"
import { CartContext } from '../CartContext/CartContext'
import { Row, Card, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


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
    <Container fluid className='container'>
          <Row className='justify-content-center'>
            <Card className='cardContainer mt-4 mb-4' style= { { width: '22rem' }}>
            <Card.Img className='thumbnail' variant="top" src={product.img} />
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.author}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
          {onCart ? (
            <div>
              <Link to="/cart">
                <Button variant="primary">Ver Carrito</Button>
              </Link>
              <Link to="/">
                <Button variant="info">Volver al shopp</Button>
              </Link>
              </div>
          ) : (
            <ItemCount initial={1} stock={product.stock} onAddItemsToCart={onAdd} />
          )}
          </Card.Body>
            </Card>
          </Row>  
        </Container>
    
  )
}

export default ItemDetail;