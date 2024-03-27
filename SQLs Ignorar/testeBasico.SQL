Create database db_rpg2d;

use db_rpg2d;

-- Criação da tabela de frutas
CREATE TABLE tabela_frutas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cor VARCHAR(255) NOT NULL
);

DROP TABLE tabela_frutas;

-- Inserção de dados na tabela de frutas
INSERT INTO tabela_frutas (nome, cor) VALUES
('Maçã', 'Vermelha'),
('Banana', 'Amarela'),
('Laranja', 'Laranja');

Select * from tabela_frutas