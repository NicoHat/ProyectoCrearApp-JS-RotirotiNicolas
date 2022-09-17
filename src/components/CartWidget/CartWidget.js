import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart,  } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import "./CartWidget.css"

function CartWidget() {
    const { cart } = useContext(CartContext);
    let cartQuantity = 0;
    cart.map((item) => {
        return (
        cartQuantity+= item.quantity);
    })
    return (
        cart.length === 0 ? 
        (<button className='cartBtn'>
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>)
        :
        (<button className='cartBtn'>
        {cartQuantity}
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>)
    );
}


export default CartWidget;