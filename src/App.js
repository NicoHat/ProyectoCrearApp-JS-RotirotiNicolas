import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer'
import UserFormContainer from './components/UserFormContainer/UserFormContainer'

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <CartContextProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/detalle/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/user' element={<UserFormContainer />} />
            </Routes>
            <Footer />
          </CartContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

