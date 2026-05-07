const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// 1. Configuração da conexão com o seu banco de dados 'loja'
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'loja',
  password: '2345', // Sua senha do pgAdmin
  port: 5432,
});

// 2. Rota para o navegador conseguir ler os produtos
app.get('/produtos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produtos');
    res.json(result.rows); // Isso envia os produtos do banco para a tela
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao conectar com o banco de dados');
  }
});

// 3. Rota de teste para a página inicial
app.get('/', (req, res) => {
  res.send('Servidor da Shopee Clone está online! 🚀');
});

// 4. Comando que mantém o servidor "vivo" e ouvindo pedidos
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});