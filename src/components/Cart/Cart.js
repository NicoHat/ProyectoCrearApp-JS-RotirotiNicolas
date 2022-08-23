import React, { useContext } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
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
            <button className='btn btn-danger' onClick={() => clear()}>Vaciar carrito</button>
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
            {cart.map((product) => (
                <Row key={product.id}>
                <Col>{product.title}</Col>
                <Col>{`${product.quantity}`}</Col>
                <Col>{`$ ${product.price}`}</Col>
                <Col>${product.quantity * product.price}</Col>
                <Col>
                  <button className="btn btn-danger" onClick={() => removeItem(product.id)}>Eliminar producto</button>
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