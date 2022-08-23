import React, { createContext, useState} from 'react'

export const CartContext = createContext();

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        const itemInCart = cart.find ((item) => item.id === id)
        if(itemInCart){
        return true
    } else{
        return false
    }
    }

    const addItem = (product, quantity) =>{
        if(isInCart(product.id)){
            const newCart = cart.map((itemInCart) => {
              if(itemInCart.id == product.id){
                const copyItem = {...itemInCart}
                copyItem.quantity += quantity
                return copyItem
              }
            })
            setCart(newCart)
          } 
          else{
          setCart([...cart, {...product, quantity}])
          }
        }

    const removeItem = (id) =>{
        setCart(cart.filter((item) => item.id !== id))
    }

    const clear = () => {
        setCart ([])
    }

  return (
   <CartContext.Provider value ={{cart, addItem, removeItem, clear}}>
    {children}
   </CartContext.Provider>
  )
}