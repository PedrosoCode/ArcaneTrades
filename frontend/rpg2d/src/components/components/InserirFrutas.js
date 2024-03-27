import React, { useState } from 'react';
import axios from 'axios';

const InserirFrutas = () => {
  const [fruta, setFruta] = useState({ nome: '', cor: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFruta(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/inserir-fruta', fruta, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Fruta inserida com sucesso!');
      // Limpar os campos após a inserção
      setFruta({ nome: '', cor: '' });
    } catch (error) {
      console.error('Erro ao inserir fruta:', error);
      alert('Erro ao inserir fruta. Verifique o console para mais detalhes.');
    }
  };

  return (
    <div>
      <h2>Inserir Fruta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={fruta.nome} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="cor">Cor:</label>
          <input type="text" id="cor" name="cor" value={fruta.cor} onChange={handleChange} required />
        </div>
        <button type="submit">Inserir Fruta</button>
      </form>
    </div>
  );
};

export default InserirFrutas;
