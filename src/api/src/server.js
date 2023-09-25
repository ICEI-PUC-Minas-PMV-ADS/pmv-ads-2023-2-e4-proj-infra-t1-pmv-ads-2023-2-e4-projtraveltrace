//importar o express
const express = require('express')
const AuthController = require('./controllers/AuthController')
const AdminController = require('./controllers/AdminController')

const authenticateMiddleware = require('./middlewares/authenticate')

//criar a app que irá executar o express
const app = express();

app.use(express.json())
//para criar uma rota, sempre que alguém realizar uma requisição para o endereço '/', que é quando alguém entra no site, iremos executar o código a seguir:
app.use('/auth', AuthController)
app.use('/admin', authenticateMiddleware, AdminController)

app.listen(3001, () => {
  console.log('O servidor está rodando')
})