import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import "./NavBar.css";

export default function NavBar(){
    return(
          <>
            <div className="nav-bar">
                  <ul className="nav-menu">
                      <NavLink to="/">
                        <li>Inicio</li>
                      </NavLink>
                      <NavLink to={`/category/Fantasia`}>
                        <li>Libros de Fantasia</li>
                      </NavLink>
                      <NavLink to={`/category/Ciencia-Ficcion`}>
                        <li>Libros de ciencia ficcion</li>
                      </NavLink>
                      <NavLink to="/cart">
                        <CartWidget />
                      </NavLink>
                  </ul>
            </div>
          </>
    )
}
