import React, { createContext, useState} from 'react'

export const CartContext = createContext();

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addProductToCart = (product) => {
      const listUpdated = cart.find(
          (productInCart) => productInCart.id === product.id
      )
          ? cart.map((productInCart) => {
                if (productInCart.id === product.id) {
                    return {
                        ...productInCart,
                        quantity: productInCart.quantity + product.quantity,
                    };
                }
                return productInCart;
            })
          : [...cart, product];
      setCart(listUpdated);
      console.log(">> elementos del carrito actualmente: ", listUpdated);
  };
    

    const removeItem = (id) =>{
        setCart(cart.filter((item) => item.id !== id))
    }

    const clear = () => {
        setCart ([])
    }

  return (
   <CartContext.Provider value ={{cart, addProductToCart, removeItem, clear}}>
    {children}
   </CartContext.Provider>
  )
}