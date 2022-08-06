import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <hr/>
      <ItemListContainer />
      </div>
  );
}

export default App;

