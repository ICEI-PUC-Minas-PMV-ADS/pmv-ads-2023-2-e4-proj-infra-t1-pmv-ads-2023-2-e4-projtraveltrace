// Importa as bibliotecas e módulos necessários
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const UserModel = require('../models/user');

// Cria um objeto de roteamento do Express
const router = express.Router();

// Função para gerar um token JWT
const generateToken = (user = {}) => {
  return jwt.sign({
    id: user.id,
    name: user.name
  }, authConfig.secret, {
    expiresIn: 86400 // O token expira em 24 horas (86400 segundos)
  });
}

// Rota para registro de usuários
router.post('/register', async (req, res) => {
  const { email } = req.body;

  // Verifica se o usuário já está cadastrado no banco de dados
  if (await UserModel.findOne({ email })) {
    return res.status(400).json({
      error: true,
      message: "Usuário já cadastrado"
    });
  }

  // Cria um novo usuário com base nos dados fornecidos na requisição
  const user = await UserModel.create(req.body);

  // Remove a senha do usuário da resposta
  user.password = undefined;

  // Retorna os dados do usuário e um token JWT
  return res.json({
    user,
    token: generateToken(user)
  });
});

// Rota para autenticação de usuários
router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  // Procura o usuário no banco de dados pelo email
  const user = await UserModel.findOne({ email }).select('+password');

  // Verifica se o usuário não foi encontrado
  if (!user) {
    return res.status(400).json({
      error: true,
      message: 'Usuário não encontrado'
    });
  }

  // Compara a senha fornecida com a senha armazenada no banco de dados
  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({
      error: true,
      message: 'Senha inválida'
    });
  }

  // Remove a senha do usuário da resposta
  user.password = undefined;

  // Retorna os dados do usuário e um token JWT
  return res.json({
    user,
    token: generateToken(user)
  });
});

// Exporta o objeto de roteamento para uso em outras partes do aplicativo
module.exports = router;
