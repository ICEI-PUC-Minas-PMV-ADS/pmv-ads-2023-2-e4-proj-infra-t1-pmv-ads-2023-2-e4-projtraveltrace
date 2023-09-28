// Importa as bibliotecas necessárias
const mongoose = require('../database/index');
const bcryptjs = require('bcryptjs');

// Define o esquema do modelo de usuário
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // Não retorna a senha ao consultar o usuário
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Função de hash da senha antes de salvar no banco de dados
UserSchema.pre("save", async function (next) {
  try {
    const hash = await bcryptjs.hash(this.password, 10); // Use o número de salt rounds adequado (exemplo: 10)
    console.log(this);
    console.log(hash);
    this.password = hash; // Substitui a senha original pelo hash gerado
    next();
  } catch (error) {
    next(error);
  }
});

// Cria o modelo de usuário com base no esquema definido
const User = mongoose.model('User', UserSchema);

// Exporta o modelo para uso em outras partes do aplicativo
module.exports = User;
