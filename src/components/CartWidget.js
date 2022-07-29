import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Cart() {
    return (
        <button>
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    );
}