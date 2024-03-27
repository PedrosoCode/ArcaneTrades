import React from 'react';

const MainMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Meu Site</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Página Inicial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contato">Contato</a>
            </li>
            {/* Adicione mais itens de menu conforme necessário */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
