import React, { useContext } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import "./Cart.css"

const Cart = () => {
    const checkout = useContext(CartContext);
  return (
    <>
    <Container className="cart mt-5">
        <Container className='cartContainer'>
        <div><p className='fs-1 text-light'>Tu carrito</p></div>
        <Row>
            <Col><p className='fs-2 text-light'>Titulo</p></Col>
            <Col><p className='fs-2 text-light'>Cantidad</p></Col>
            <Col><p className='fs-2 text-light'>Precio total</p></Col>
            <Col><p className='fs-2 text-light'>Subtotal</p></Col>
            <Col>
            <button className='btn btn-danger' onClick={() => checkout.clear()}>Vaciar carrito</button>
            </Col>
        </Row>
        <hr/>
        {checkout.cart.length === 0 ? (
            <div>
                <p className='fs-1'>No hay productos en su carrito.</p>
                <Link to="/">
                <button type='button' className='btn btn-info'>Volver a inicio</button>
                </Link>
            </div>
        ) : (
            <>
            {checkout.cart.map((product) => (
                <Row key={product.id}>
                    <Col><p className='fs-3 text-light'>{product.title}</p></Col>
                    <Col><p className='fs-3 text-light'>{`${product.quantity}`}</p></Col>
                    <Col><p className='fs-3 text-light'>{`$ ${product.price}`}</p></Col>
                    <Col><p className='fs-3 text-light'>${product.quantity * product.price}</p></Col>
                    <Col>
                        <button type="button" className="btn btn-danger" onClick={() => checkout.removeItem(product.id)}>Eliminar producto</button>
                    </Col>
                </Row>
            ))}
            <hr/>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <p className='fs-2 text-light'>Total: ${checkout.addTotal(checkout.cart)}</p>
                    </Col>
                    <Col>
                    <Button as={Link} to="/user" className="btn btn-success">Finalizar compra</Button>
                    </Col>
                </Row>
            </>
        )}
        </Container>
    </Container>
    </>
  )
}

export default Cart