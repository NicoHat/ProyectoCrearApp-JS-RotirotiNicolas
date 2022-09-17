import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import "./NavBar.css"
function nav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className='textDeco' to="/"><h2>Atlantis</h2></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <Link className='textDeco' to="/"><h3>Inicio</h3></Link>
            </Nav.Link>
            <NavDropdown className='navDrop' title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link className='textDeco' to="category/Fantasia"><h4>Fantasia</h4></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className='textDeco' to="category/Ciencia-Ficcion"><h4>Ciencia-Ficcion</h4></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className='textDeco' to="category/Novela-Literaria"><h4>Novela-Literaria</h4></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className='textDeco' to="category/Gastronomia"><h4>Gastronomia</h4></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link className='textDeco' to="category/Filosofia"><h4>Filosofia</h4></Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className='textDeco' to="/cart">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default nav;