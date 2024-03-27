import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext'; 
import Navbar from '../components/Navbar';
import ExibeTeste from '../components/ExibeTeste';

const Itens = () => {
    const { isAuthenticated } = useAuth(); // Acessa o estado de autenticação
    const navigate = useNavigate();

    // Hook para efeito colateral que redireciona o usuário caso não esteja logado
    useEffect(() => {
        if (!isAuthenticated) {
            console.log('Usuário NÃO está autenticado. Redirecionando para a página inicial...');
            navigate('/'); // Redireciona para a página inicial caso não esteja logado
        } else {
            console.log('Usuário está autenticado.');
        }
    }, [isAuthenticated, navigate]); 

    const username = localStorage.getItem('username');

    return (
        <div>
            <Navbar />
            <h2>Página Teste</h2>
            <p>Esta é a página de Itens.</p>
            <ExibeTeste />
            <br></br><br></br>
            {isAuthenticated && <p>Bem-vindo, {username}!</p>}
        </div>
    );
};

export default Itens;
