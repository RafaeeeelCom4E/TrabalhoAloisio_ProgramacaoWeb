const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // 1. Import no topo

const app = express();
const port = 3000;

// 2. O CORS PRECISA vir logo após o 'app = express()'
// Isso garante que ele proteja/libere todas as rotas abaixo dele
app.use(cors()); 

// 3. Configuração do Banco de Dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'loja',
  password: '2345', 
  port: 5432,
});

// 4. Rotas
app.get('/produtos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produtos');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao conectar com o banco de dados');
  }
});

app.get('/', (req, res) => {
  res.send('Servidor da Shopee Clone está online! 🚀');
});

// 5. Por último, liga o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});