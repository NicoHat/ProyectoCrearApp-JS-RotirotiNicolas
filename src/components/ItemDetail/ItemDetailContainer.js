import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import dataProducts from '../dataProducts/dataProducts'



function getDetailProducts() {
    return new Promise((resolve, reject) => {
      setTimeout (() => resolve(dataProducts), 3000);
    });
}

const ProductDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setIsLoading] = useState(true)

    useEffect(() => {
        getDetailProducts()
          .then((respuesta) => {
            setProduct(respuesta)
          })
          .catch((error) => {
            console.log(error)
          })
          .finally (() => setIsLoading(false))
      }, []);


    return (
      <>
        <div className='container main mx-auto'>
          <ItemDetail
          title={ItemDetail.title}
          price={ItemDetail.price}
          category={ItemDetail.category}
          description={ItemDetail.description}
          img={ItemDetail.img}
           />
        </div>
      </>
    )
}

export default ProductDetailContainer;