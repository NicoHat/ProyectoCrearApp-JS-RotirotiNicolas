import React, { useContext } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

const Cart = () => {
    const { cart, removeItem, clear, addTotal} = useContext(CartContext)

  return (
    <>
    <Container>
        <div><h1>Tu carrito</h1></div>
        <Row>
            <Col>Titulo</Col>
            <Col>Cantidad</Col>
            <Col>Precio total</Col>
            <Col>Subtotal</Col>
            <Col>
            <button className='btn btn-danger' onClick={() => clear()}>Vaciar carrito</button>
            </Col>
        </Row>
        <hr/>
    </Container>
    <Container>
        {cart.length === 0 ? (
            <div>
                <h3>No hay productos en su carrito.</h3>
                <Link to="/">
                <button type='button' className='btn btn-info'>Volver a inicio</button>
                </Link>
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
                        <button type="button" className="btn btn-outline-danger" onClick={() => removeItem(product.id)}>Eliminar producto</button>
                    </Col>
                </Row>
            ))}
            <hr/>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <h2>Total: ${addTotal(cart)}</h2>
                    </Col>
                    <Col>
                        <button type="button" className='btn btn-success'>Finalizar compra</button>
                    </Col>
                </Row>
            </>
        )}
    </Container>
    </>
  )
}

export default Cart