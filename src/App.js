
import './App.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';





function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element= {<ItemListContainer  />} />
          <Route path="/products" element={<ItemListContainer/>}></Route>
          <Route path="/category/:id" element= {<ItemListContainer  />} />
          <Route path="item/:id" element= {<ItemDetailContainer  />} />
        </Routes>
        
    </div>
  );
} 

export default App;
