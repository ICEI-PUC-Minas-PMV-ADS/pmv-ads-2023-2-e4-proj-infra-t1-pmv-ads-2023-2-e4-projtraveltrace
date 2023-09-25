const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ssgabrielvinicius:TravelTracePucMinas@api-1-mongo.c5c63mb.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('connected', () => {
  console.log('Conexão ao MongoDB estabelecida com sucesso');
});

mongoose.connection.on('error', (err) => {
  console.error('Erro na conexão com o MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Desconectado do MongoDB');
});


mongoose.Promise = global.Promise

module.exports = mongoose