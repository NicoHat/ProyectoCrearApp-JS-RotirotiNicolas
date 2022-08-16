import React, { useState, useEffect} from 'react';
import Item from '../Item/Item.js';
import dataProducts from '../dataProducts/dataProducts.js';


function getProducts() {
  return new Promise((resolve, reject) => {
    resolve(dataProducts)
  });
}

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        setProducts(respuesta)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <div className='container main mx-auto mt-5'>
          {products.map((item) => {
            return (
              <Item
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
    };

    
export default ItemListContainer;
