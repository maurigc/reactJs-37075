import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import Cart from './containers/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShopProvider from './context/ShopContext';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="hello coder"/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="hello coder"/>}></Route>
            <Route path='/detail/:detailId' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
      </BrowserRouter>
    </ShopProvider>  
  );  
}

export default App;
