import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';




function CartWidget() {
    const { cart } = useContext(CartContext);
    let cartQuantity = 0;
    cart.map((item) => {
        cartQuantity+= item.quantity;
    })
    return (
        cart.length === 0 ? 
        (<button>
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>)
        :
        (<button>
        {cartQuantity}
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>)
    );
}


export default CartWidget;