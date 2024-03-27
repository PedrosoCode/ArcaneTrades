import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Usado para redirecionar o usuário após o login
import { useAuth } from '../../context/AuthContext'; // Ajuste o caminho conforme a localização do seu AuthContext
import Navbar from '../components/Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Usando o hook useAuth para acessar a função login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login realizado com sucesso.');
        login(); // Atualize o estado de autenticação para refletir que o usuário está logado
        navigate('/Itens'); // Exemplo de redirecionamento após o login
      } else {
        alert('Falha no login. Por favor, verifique seu usuário e senha.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao tentar fazer login.');
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Página de Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
