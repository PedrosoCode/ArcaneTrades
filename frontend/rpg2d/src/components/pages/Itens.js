// src/components/Teste.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InserirFrutas from '../components/InserirFrutas';
import Navbar from '../components/Navbar';
import ExibeTeste from '../components/ExibeTeste';

const Itens = () => {
    return (
        <div>
            <Navbar />
            <h2>Página Teste</h2>
            <p>Esta é a página de Itens.</p>
            <ExibeTeste />
        </div>
    );
}

export default Itens;

