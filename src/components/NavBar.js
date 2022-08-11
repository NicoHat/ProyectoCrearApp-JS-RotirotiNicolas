import Cart from "./CartWidget.js"
export default function NavBar(){
    return(
          <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">E-commerce Dogdog</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Indumentaria masculina</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Indumentaria femenina</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Calzados unisex</a>
                </li>
              </ul>
            </div>
            <Cart />
          </nav>
          </>
    )
}
