import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import "./NavBar.css";

export default function NavBar(categoryId){
    return(
          <>
            <div className="nav-bar">
                  <ul className="nav-menu">
                      <NavLink to="/">
                        <li>Inicio</li>
                      </NavLink>
                      <NavLink to={`/detalle/${categoryId}`}>
                        <li>Libros de Fantasia</li>
                      </NavLink>
                      <NavLink to={`/detalle/${categoryId}`}>
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
