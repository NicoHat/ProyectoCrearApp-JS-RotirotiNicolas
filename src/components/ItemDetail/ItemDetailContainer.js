import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import dataProducts from '../dataProducts/dataProducts'



function getDetailProducts() {
    return new Promise((resolve, reject) => {
      setTimeout (() => resolve([dataProducts[3]]), 2000);
    });
}

function ItemDetailContainer() {
    const [product, setProduct] = useState([])

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
          {console.log("producto", product)}
          {product.map((item) => {
            return (
              <ItemDetail
              key={item.id}
              title={item.title}
              price={item.price}
              category={item.category}
              description={item.description}
              img={item.img}
              />
            );
          } )}
        </div>
      );
}

export default ItemDetailContainer;