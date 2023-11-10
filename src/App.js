import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting={"BIENVENIDOS A LA TIENDA"}/>

    </div>
  );
}

export default App;
