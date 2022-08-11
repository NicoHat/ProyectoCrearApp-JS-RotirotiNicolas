import React, { useState, useEffect} from 'react';
import Item from '../Item/Item.js';
import dataProducts from '../dataProducts/dataProducts.js';


function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout (() => resolve([dataProducts[1]]), 2000);
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

const lista = [] 
products.forEach((item) => {
  lista.push(
    <Item
      title={item.title}
      price={item.price}
      category={item.category}
      img={item.img}
    />)
})

  return (
    <div className="container main mx-auto mt-5">
      {lista}
    </div>
  );
    };

    
export default ItemListContainer;
