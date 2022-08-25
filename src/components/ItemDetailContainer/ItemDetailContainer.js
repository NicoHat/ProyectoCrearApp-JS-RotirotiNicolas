import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import dataProducts from '../dataProducts/dataProducts'
import { useParams } from 'react-router-dom'



function ItemDetailContainer() {
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()
    


    function getDetailProducts(id) {
      return new Promise((resolve, reject) => {
        setTimeout ( () => resolve(dataProducts[id-1]), 2000)        
      });
  }
  console.log()

    useEffect(() => {
        getDetailProducts(Number(id))
          .then((respuesta) => {
            setProduct(respuesta)
            setIsLoading(false)
          })
          .catch((error) => {
            console.log(error)
          })
      }, [id]);


    return (
        <div className='container main mx-auto mt-5'>
          {isLoading ?
          <>
          Cargando producto #{id}
          </>
          :
          <ItemDetail {...product}/>
         }
              
        </div>
      );
}

export default ItemDetailContainer;