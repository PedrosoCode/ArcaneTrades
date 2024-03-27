import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Importe de Arquivos diversos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importe de Componentes
import InserirFrutas from './components/components/InserirFrutas';

// Importe de Páginas
import Home from './components/pages/Home';
import Teste from './components/pages/Teste';
import Info from './components/pages/Info';
import Itens from './components/pages/Itens';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

// Importe do Contexto de Autenticação
import { AuthProvider } from './context/AuthContext'; // Ajuste o caminho conforme necessário

const App = () => {
  return (
    <Router>
      <AuthProvider> {/* Envolve as rotas com AuthProvider */}
        <div>
          <br></br>
          <br></br>
          <br></br>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Teste" element={<Teste />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/Itens" element={<Itens />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
