const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Iniciando o App
const app = express();
app.use(express.json()); //Permitir com que envie dados em formato JSON
app.use(cors());

//Iniciando o Banco de Dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
require('./src/models/Product');

//Rotas
app.use('/api', require ('./src/routes'));

app.listen(3001);