import React, { createContext, useState} from 'react'

export const CartContext = createContext();

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addTotal = (cart) => {
        const multiply = (num1, num2) => {
            return num1 * num2
        }
        const values = []
        cart.forEach((product) => {
            const op = multiply(product.quantity, product.price)
            values.push(op)
        })
        const total = values.reduce((valorAnterior, valorActual) => {
            return valorAnterior + valorActual
        }, 0)
        return total
    }

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
    };
    
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }
    
    const clear = () => {
        setCart ([])
    }

  return (
   <CartContext.Provider value ={{cart, addProductToCart, removeItem, clear, addTotal}}>
    {children}
   </CartContext.Provider>
  )
}