// src/components/Home.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MainMenu from '../components/MainMenu';
import Login from './Login';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h2>Página Home</h2>
      <p>Bem-vindo à página inicial!</p>
      <Link to="/Teste">About</Link> <br></br><br></br>
      <Link to="/Login">login</Link><br></br><br></br>
      <Link to="/Register">Register</Link><br></br><br></br>
    </div>
  );
}

export default Home;
