import Cart from "./CartWidget.js"
export default function NavBar(){
    return(
          <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">E-commerce Dogdog</a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Indumentaria masculina</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Indumentaria femenina</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Calzados unisex</a>
                </li>
              </ul>
            </div>
            <Cart />
          </nav>
          </>
    )
}
