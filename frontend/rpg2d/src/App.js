import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Import de Arquivos diversos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importe de Componentes
import InserirFrutas from './components/components/InserirFrutas';

//Importe de Páginas
import Home from './components/pages/Home';
import Teste from './components/pages/Teste';
import Info from './components/pages/Info';
import Itens from './components/pages/Itens';



const App = () => {
  return (
    <Router>
      <div>
      <br></br>
      <br></br>
      <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Teste" element={<Teste />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Itens" element={<Itens />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;