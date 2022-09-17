import React, { useState, useEffect} from 'react';
import Item from '../Item/Item.js';
import firestoreDB from '../../services/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Container, Row} from 'react-bootstrap'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.js';


function ItemList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  const  getProducts = () => {
    return new Promise((resolve) => {
      const librosCollection = collection(firestoreDB, "libros");
      
      getDocs(librosCollection).then( snapshot => {
        const docsData = snapshot.docs.map( doc => {
          return { ...doc.data(), id: doc.id}
        });
        resolve(docsData)
      });
    });
  };
  
  const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      const librosCollectionRef = collection(firestoreDB, "libros");
      const q = query(librosCollectionRef, where("category", "==", categoryId))
      getDocs(q).then( snapshot => {
        const docsData = snapshot.docs.map( doc => {
          return { ...doc.data(), id: doc.id}
        });
        resolve(docsData)
      });
    });
  };

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then((resolve) => {
        setProducts(resolve)
        setIsLoading(false)
      });
    } else {
      getProducts().then((resolve) => {
        setProducts(resolve)
        setIsLoading(false)
      });
    }
  }, [categoryId])

  return (
        <Container fluid className='container mt-5' >
          <Row>
            {
          isLoading ? <div><LoadingSpinner /></div>:
          products.map((item) => {
            return (
              <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              img={item.img}
              author={item.author}
              />
            );
          } )
        }
          </Row>
        </Container>
  );
  };

    
export default ItemList;

