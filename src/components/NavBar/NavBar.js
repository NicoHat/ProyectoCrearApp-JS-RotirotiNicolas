import Cart from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import "./NavBar.css";

export default function NavBar(){
    return(
          <>

            <div className="nav-bar">
                  <ul className="nav-menu">
                      <Link to="/">
                        <li>Inicio</li>
                      </Link>
                      <Link to="/category/:categoryId">
                        <li>Indumentaria masculina</li>
                      </Link>
                      <Link to="/category/:categoryId">
                        <li>Indumentaria femenina</li>
                      </Link>
                      <Link to="/cart">
                        <Cart />
                      </Link>
                  </ul>
            </div>

          </>
    )
}
