
import './App.css';
import NavBar from './Components/Navbar';
import Menu from './Components/Menu';
import ItemListContainer from './Components/ItemListContainer'


//import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        
        <ItemListContainer greeting="Bienvenidos" />
        
    </div>
  );
}

export default App;
