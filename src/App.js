import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Form from './containers/Form';
import Cart from './containers/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopProvider from './context/ShopContext';
import Footer from './components/Footer';

function App() {
  return (
    <ShopProvider>
      <div className='app'>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="hello coder"/>}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="hello coder"/>}></Route>
              <Route path='/detail/:detailId' element={<ItemDetailContainer/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/form' element={<Form/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
      </div>
    </ShopProvider>  
  );  
}

export default App;
