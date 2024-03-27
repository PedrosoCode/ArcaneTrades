const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcryptjs'); // Adicione bcryptjs para segurança de senha


const app = express();
const port = 5000;

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Inspiron1',
  database: 'db_rpg2d'
});

// Middleware para analisar corpos de solicitações JSON
app.use(bodyParser.json());

// Middleware para configurar o CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


// Middleware para analisar corpos de solicitações JSON
app.use(bodyParser.json());

// Middleware para configurar o CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Adicione essa rota para o login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query para encontrar o usuário pelo username
  const queryLogin = 'SELECT * FROM usuarios WHERE username = ?';

  connection.query(queryLogin, [username], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).send('Erro no servidor.');
    }
    if (results.length === 0) {
      return res.status(401).send('Usuário não encontrado.');
    }
    const user = results[0];

    // Aqui, substitua a comparação direta por uma verificação de senha hash se estiver usando hashes
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).send('Senha incorreta.');
    }

    // Usuário autenticado com sucesso
    res.status(200).send('Login realizado com sucesso.');
  });
});


// Rota para inserir uma fruta
app.post('/inserir-fruta', (req, res) => {
  const { nome, cor } = req.body;

  // Query para inserir uma fruta na tabela
  const queryInsercao = 'INSERT INTO tabela_frutas (nome, cor) VALUES (?, ?)';

  // Executando a query de inserção
  connection.query(queryInsercao, [nome, cor], (err, result) => {
    if (err) {
      console.error('Erro ao inserir fruta:', err);
      res.status(500).send('Erro ao inserir fruta.');
      return;
    }
    console.log('Fruta inserida com sucesso!');
    res.status(200).send('Fruta inserida com sucesso!');
  });
});

app.get('/exibir-itens', (req, res) => {
    // Chama a stored procedure ExibirItens
    connection.query('CALL sp_select_itens()', (err, results) => {
      if (err) {
        console.error('Erro ao chamar a stored procedure:', err);
        // Envia uma resposta de erro HTTP
        return res.status(500).send('Erro ao buscar itens.');
      }
      // Envia uma resposta HTTP com os resultados da stored procedure
      return res.status(200).json(results[0]);
    });
  });


// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
