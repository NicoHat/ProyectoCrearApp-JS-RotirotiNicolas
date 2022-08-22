import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'



const Cart = () => {
    const { cart, removeItem, clear} = useContext(CartContext)
    console.log(cart)

  return (
    <>
    <Container>
        <div><h1>Tu carrito</h1></div>
        <Row>
            <Col>Titulo:</Col>
            <Col>Cantidad:</Col>
            <Col>Precio total</Col>
            <Col>
            <button className='btn btn-danger' onClick={() => clear()}>Eliminar productos</button>
            </Col>
        </Row>
    </Container>
    <Container>
        {cart.lenght === 0 ? (
            <div>
                <p>No hay productos en el carrito</p>
                <button as={Link} to="/">Volver a inicio</button>
            </div>
        ) : (
            <>
            {cart.map((item) => (
                <Row key={item.id}>
                <Col>{item.titulo}</Col>
                <Col>{`${item.cantidad}`}</Col>
                <Col>{`$ ${item.precio}`}</Col>
                <Col>${item.cantidad * item.precio}</Col>
                <Col>
                  <Button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del carrito</Button>
                </Col>
                </Row>
            ))}
            </>
        )}
    </Container>
    </>
  )
}

export default Cart