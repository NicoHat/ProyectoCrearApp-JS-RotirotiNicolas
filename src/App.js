import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <CartContextProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

