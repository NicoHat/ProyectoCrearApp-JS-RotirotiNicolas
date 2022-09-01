import React, { useContext } from 'react'
import firestoreDB from '../../services/firebase'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";

const Cart = () => {
    const checkout = useContext(CartContext);
    const createOrder = () => {
        const productsForDB = checkout.cart.map(item => ({
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            price: item.price
        }));

        let order = {
            buyer: {
                name: "Nicolas Rotiroti",
                email: "nicorotiroti@gmail.com",
                phone: "01122334455"
            },
            total: checkout.addTotal(checkout.cart),
            items: productsForDB,
            date: serverTimestamp()
        };

        const createOrderInFS = async () => {
            const newOrderRef = doc(collection(firestoreDB, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFS()
        .then(result => {
            alert('Tu orden de compra es '+ result.id)
            checkout.cart.forEach(async (item) => {
                const itemRef = doc(firestoreDB, "libros", item.id);
                await updateDoc(itemRef, {
                    stock: increment(-item.quantity)
                });
            });
            checkout.clear();
        });
    }

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
            <button className='btn btn-danger' onClick={() => checkout.clear()}>Vaciar carrito</button>
            </Col>
        </Row>
        <hr/>
    </Container>
    <Container>
        {checkout.cart.length === 0 ? (
            <div>
                <h3>No hay productos en su carrito.</h3>
                <Link to="/">
                <button type='button' className='btn btn-info'>Volver a inicio</button>
                </Link>
            </div>
        ) : (
            <>
            {checkout.cart.map((product) => (
                <Row key={product.id}>
                    <Col>{product.title}</Col>
                    <Col>{`${product.quantity}`}</Col>
                    <Col>{`$ ${product.price}`}</Col>
                    <Col>${product.quantity * product.price}</Col>
                    <Col>
                        <button type="button" className="btn btn-outline-danger" onClick={() => checkout.removeItem(product.id)}>Eliminar producto</button>
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
                    <h2>Total: ${checkout.addTotal(checkout.cart)}</h2>
                    </Col>
                    <Col>
                        <button onClick={createOrder} type="button" className='btn btn-success'>Finalizar compra</button>
                    </Col>
                </Row>
            </>
        )}
    </Container>
    </>
  )
}

export default Cart