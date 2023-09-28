// Importa o framework Express
const express = require('express');

// Importa os controladores (controllers) necessários
const AuthController = require('./controllers/AuthController');
const AdminController = require('./controllers/AdminController');

// Importa o middleware de autenticação personalizado
const authenticateMiddleware = require('./middlewares/authenticate');

// Cria uma instância do aplicativo Express
const app = express();

// Define o uso do middleware para análise de JSON nas solicitações
app.use(express.json());

// Define rotas e controladores
// Rota '/auth' com AuthController
app.use('/auth', AuthController);

// Rota '/admin' com autenticação usando o middleware authenticateMiddleware
app.use('/admin', authenticateMiddleware, AdminController);

// Inicia o servidor na porta 3001
app.listen(3001, () => {
  console.log('O servidor está rodando na porta 3001');
});
