import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <hr/>
      <ItemListContainer />
      {/* <ItemDetailContainer  /> */}
      </div>
  );
}

export default App;

