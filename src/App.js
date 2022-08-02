import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <><NavBar />
    <ItemListContainer greeting="Remera" />
    </>
  )
}

export default App;

