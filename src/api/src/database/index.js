// Importa a biblioteca mongoose para a conexão com o MongoDB 
const mongoose = require('mongoose');

// Estabelece uma conexão com o MongoDB usando a URL de conexão fornecida
mongoose.connect('mongodb+srv://ssgabrielvinicius:TravelTracePucMinas@api-1-mongo.c5c63mb.mongodb.net/?retryWrites=true&w=majority');

// Configura os ouvintes de eventos para a conexão com o MongoDB
mongoose.connection.on('connected', () => {
  console.log('Conexão ao MongoDB estabelecida com sucesso');
});

mongoose.connection.on('error', (err) => {
  console.error('Erro na conexão com o MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Desconectado do MongoDB');
});

// Configura a Promise do mongoose para ser global
mongoose.Promise = global.Promise;

// Exporta a instância de mongoose para uso em outros módulos
module.exports = mongoose;
