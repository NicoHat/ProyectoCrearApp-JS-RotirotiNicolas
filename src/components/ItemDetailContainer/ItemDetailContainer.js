import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import firestoreDB from '../../services/firebase'
import { collection, doc, getDoc } from 'firebase/firestore'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { Container } from 'react-bootstrap'


function getProductById(id) {
  return new Promise ( (resolve) => {
    const librosCollectionRef = collection(firestoreDB, "libros");
    const docRef = doc(librosCollectionRef, id);
   
    getDoc(docRef).then(snapshot => {
      resolve(
        { ...snapshot.data(), id: snapshot.id}
      )
    });
  });
};

function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    

    useEffect(() => {
        getProductById((id))
          .then((respuesta) => {
            setProduct(respuesta)
            setIsLoading(false)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [id]);


    return (
      <Container>
          {isLoading ?
          <>
          <LoadingSpinner />
          </>
          :
          <ItemDetail {...product}/>
         }    
      </Container>
      );
}

export default ItemDetailContainer;