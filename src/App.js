import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="hello coder"/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="hello coder"/>}></Route>
          <Route path='/detail/:detailId' element={<ItemDetailContainer/>}></Route>
        </Routes>
        
      </div>
    </BrowserRouter>  
  );
}

export default App;
