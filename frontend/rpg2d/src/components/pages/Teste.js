// src/components/Teste.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InserirFrutas from '../components/InserirFrutas';

const Teste = () => {
  return (
    <div>
      <h2>Página Teste</h2>
      <p>Esta é a página de teste.</p>
      <InserirFrutas />
    </div>
  );
}

export default Teste;
