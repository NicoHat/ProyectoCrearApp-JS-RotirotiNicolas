import { Container, Row, Col, Button } from "react-bootstrap";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import firestoreDB from "../../services/firebase";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import swal from "sweetalert"
import "./UserForm.css"


const UserForm = () => {

    const checkout = useContext(CartContext);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidated, setEmailValidated] = useState('')
    const [phone, setPhone] = useState('');

    const inputName = (e) => {
        setName(e.target.value);
      };

    const inputSurname = (e) => {
        setSurname(e.target.value);
      };
     
      const inputEmail = (e) => {
        setEmail(e.target.value);
      };

      const inputEmailValidated = (e) => {
        setEmailValidated(e.target.value);
      };
     
      const inputPhone = (e) => {
        setPhone(e.target.value);
      };

      const clearForm = () =>{
        setName("")
        setSurname("")
        setEmail("")
        setEmailValidated("")
        setPhone("")
      }

     const createOrder = () => { 
      const productsForDB = checkout.cart.map(product => ({
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        price: product.price
      }));
  
      let purcharseOrder = {
        buyer: {
            name: `${name}`,
            surname: `${surname}`,
            phone: `${phone}`,
            email: `${email}`,
        },
        total: checkout.addTotal(checkout.cart),
        items: productsForDB,
        date: serverTimestamp()
      };
      

       const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(firestoreDB, "orders"));
        await setDoc(newOrderRef, purcharseOrder);
        return newOrderRef;
      }
    
      createOrderInFirestore(purcharseOrder)
        .then(result => {
          swal({
            title: '¡Compra realizada con éxito!',
            text: 'Se realizó tu orden de compra con el código  ' + result.id,
            icon: 'success',
            button: 'Entendido'
        })
          checkout.cart.forEach(async (product) => {
            const bookRef = doc(firestoreDB, "libros", product.id);
            await updateDoc(bookRef, {
              stock: increment(-product.quantity)
            });
          });
          checkout.clear();
          clearForm()
        })
        .catch(err => console.log(err));
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if(email === emailValidated){
        createOrder()
    } else{
        alert("Error! Los mails no coinciden!")
    }
  }



  return (
    <Container className="bg-light opacity-90 pt-3 px-5 mt-5 userCont">
            <form>
                <Col>
                    <Row>
                        <label htmlFor="firstName" className="form-label tituloForm mt-3">Nombre/s</label>
                        <input onChange={inputName} value={name} type="text" className="form-control" id="name" placeholder="Nombre/s" required />
                    </Row>

                    <Row>
                        <label htmlFor="firstName" className="form-label tituloForm mt-3">Apellido/s</label>
                        <input onChange={inputSurname} value={surname} type="text" className="form-control" id="name" placeholder="Apellido/s" required />
                    </Row>
                    
                    <Row>
                        <label htmlFor="email" className="form-label tituloForm mt-3">E-mail <span className="text-muted"></span></label>
                        <input onChange={inputEmail} value={email} type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </Row>

                    <Row>
                        <label htmlFor="email2" className="form-label tituloForm mt-3">Repetir E-mail <span className="text-muted"></span></label>
                        <input onChange={inputEmailValidated} value={emailValidated} type="email" className="form-control" id="email2" placeholder="name@example.com" required />
                    </Row>

                    <Row>
                        <label htmlFor="phone" className="form-label tituloForm mt-3">Teléfono</label>
                        <input onChange={inputPhone} value={phone} type="number" className="form-control"  id="phone" placeholder="110303456" required />
                    </Row>
                </Col>
                {checkout.cart.length === 0 ? (
                    <Button onClick={formSubmit} disabled className="w-100 btn btn-success btn-lg mt-5 mb-5" type="submit">Realizar compra</Button>
                ):(
                    <Button onClick={formSubmit} className="w-100 btn btn-success btn-lg mt-5 mb-5" type="submit">Realizar compra</Button>
                )}
            </form>
    </Container>

  )
}
export default UserForm;