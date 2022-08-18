import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import dataProducts from '../dataProducts/dataProducts'
import { useParams } from 'react-router-dom'

function getDetailProducts() {
    return new Promise((resolve, reject) => {
      setTimeout ( () => resolve(dataProducts), 2000)        
    });
}

function ItemDetailContainer({ itemid }) {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getDetailProducts()
          .then((respuesta) => {
            setProduct(respuesta[id])
            setIsLoading(false)
          })
          .catch((error) => {
            console.log(error)
          })
      }, []);


    return (
        <div className='container main mx-auto mt-5'>
          {isLoading ?
          <>
          Cargando producto #{id}
          </>
          :
          <ItemDetail
          id={product.id}
          title={product.title}
          price={product.price}
          category={product.category}
          img={product.img}
          stock={product.stock}
          />
         }
              
        </div>
      );
}

export default ItemDetailContainer;