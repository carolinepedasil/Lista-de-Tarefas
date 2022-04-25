const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

// usar express.json() para obter os dados no formato json
app.use(express.json());

// Porta
const PORT = process.env.PORT || 5500;

// Usar o cors
app.use(cors());

// Importar as rotas
const CategoryItemRoute = require('./routes/categoryItems');
const DateItemRoute = require('./routes/dateItems');
const NameItemRoute = require('./routes/nameItems');
const TodoItemRoute = require('./routes/todoItems');

// Conectar com o Banco de Dados MongoDB
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Banco de Dados conectado"))
.catch(err => console.log(err))

// Adicionar Porta e Conectar no Servidor
app.listen(PORT, () => console.log("Servidor conectado"));

// Rotas
app.use('/', CategoryItemRoute);
app.use('/', DateItemRoute);
app.use('/', NameItemRoute);
app.use('/', TodoItemRoute);