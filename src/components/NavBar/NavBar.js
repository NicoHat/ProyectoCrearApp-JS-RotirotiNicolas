import Cart from "../CartWidget.js"
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
                    <li>Indumentaria masculina</li>
                    <li>Indumentaria femenina</li>
                    <Cart />
                  </ul>
            </div>

          </>
    )
}
