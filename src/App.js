import './App.css';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./main.css";
function App() {
  return (
    <div>
       <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
        <Route path="/productos/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

      </div>
  );
}


export default App;
