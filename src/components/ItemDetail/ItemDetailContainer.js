import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import dataProducts from '../dataProducts/dataProducts'
import { useParams } from 'react-router-dom'
import { getDetailId } from '../Utils/customFetch'



function getDetailProducts() {
    return new Promise((resolve, reject) => {
     resolve([dataProducts]);
    });
}

function ItemDetailContainer({ itemid }) {
    const [product, setProduct] = useState([])

    const { id } = useParams()

    useEffect(() => {
        getDetailProducts()
          .then((respuesta) => {
            console.log(respuesta)
            setProduct(respuesta)
          })
          .catch((error) => {
            console.log(error)
          })
      }, []);


    return (
        <div className='container main mx-auto mt-5'>
          {product.map((item) => {
            return (
              <ItemDetail
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              img={item.img}
              />
            );
          } )}
        </div>
      );
}

export default ItemDetailContainer;