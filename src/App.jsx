import NavBar from './components/home/navBarHome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sobre from './pages/sobre/Sobre';
import InfoPersonagens from './pages/InfoPersonagens';
import Localizacao, {LocationDetail} from './pages/Localizacao';
import ResumoSobre from './pages/sobre/resumoSobre';
import Galeria from './pages/sobre/images'

function App() {
  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/Sobre' element={<Sobre/>}/>
        <Route path='/InfoPersonagens' element={<InfoPersonagens/>}/>
        <Route path='/Localizacao' element={<Localizacao/>}/>
        <Route path="/locations/:id" element={<LocationDetail />} />
        <Route path='/resumoSobre' element={<ResumoSobre/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
      </Routes>
    </Router>
  )
}

export default App
