
import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import { CartContextProvider } from './Components/CartContext';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Cart from "./Components/Cart"





function App() {
  return (

    <CartContextProvider>
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/products" element={<ItemListContainer/>}></Route>
          <Route path="/category/:id" element= {<ItemListContainer  />} />
          <Route path="item/:id" element= {<ItemDetailContainer  />} />
          <Route path="Cart" element={<Cart />}></Route>
        </Routes>
        
    </div>
    </CartContextProvider>
  );
} 

export default App;
