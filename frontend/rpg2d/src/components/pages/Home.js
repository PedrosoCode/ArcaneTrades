// src/components/Home.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainMenu from '../components/MainMenu';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h2>Página Home</h2>
      <p>Bem-vindo à página inicial!</p>
      <Link to="/Teste">About</Link>
    </div>
  );
}

export default Home;
