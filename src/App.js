
import './App.css';
import NavBar from './Components/navbar/navbar';
import Menu from './Components/navbar/menu';
import Catalogo from './Components/ItemListContainer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Menu />
        <Catalogo />
    </div>
  );
}

export default App;
