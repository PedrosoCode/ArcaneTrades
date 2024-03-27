import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExibeTeste = () => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function fetchItens() {
      try {
        const response = await axios.get('http://localhost:5000/exibir-itens');
        setItens(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    }

    fetchItens();
  }, []);

  return (
    <div>
      <h2>Select de Itens</h2>
      <ul>
        {itens.map(item => (
          <li key={item.id}>
            <strong>Nome:</strong> {item.nome} | 
            <strong> Tipo:</strong> {item.tipo} | 
            <strong> Custo:</strong> {item.custo} | 
            <strong> Peso:</strong> {item.peso} | 
            <strong> Raridade:</strong> {item.raridade} | 
            <strong> Efeito:</strong> {item.efeito} | 
            <strong> Tags:</strong> {item.tags}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExibeTeste;
