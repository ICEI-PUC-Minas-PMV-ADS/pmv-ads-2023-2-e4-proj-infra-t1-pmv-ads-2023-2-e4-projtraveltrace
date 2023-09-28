// Importa a biblioteca Express e cria um objeto de roteamento
const express = require('express');
const router = express.Router();

// Rota para listar todos os usuários (exemplo)
router.get('/users', (req, res) => {
  console.log('controller'); // Exibe uma mensagem de log para fins de depuração
  return res.json({}); // Retorna uma resposta JSON vazia (pode ser substituída com dados reais)
});

// Exporta o objeto de roteamento para uso em outras partes do aplicativo
module.exports = router;
