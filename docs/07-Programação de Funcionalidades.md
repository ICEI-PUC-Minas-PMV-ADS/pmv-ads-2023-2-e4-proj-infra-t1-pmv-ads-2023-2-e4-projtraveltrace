# Programação de Funcionalidades

A seguir, faremos a descrição das funcionalidades até então desenvolvidas pela equipe. Mostraremos o código fonte com comentários explicando o funcionamento, bem como, após cada trecho de código, apontamentos sobre o que foi desenvolvido.

A API para cadastro de usuários foi desenvolvida em javascript (Node.js), utilizando o framework Express; como banco de dados, por um requisito do projeto, foi utilizado um banco de dados NoSQL, optamos então por utilizar o MongoDB, um banco de dados não relacional, orientado a documentos, hospedado em nuvem.

## Models
Aqui temos a model user.js, utilizada para se cadastrar um novo usuário no banco de dados:

// Importa as bibliotecas necessárias


const mongoose = require('../database/index');<br>
const bcryptjs = require('bcryptjs');

// Define o esquema do modelo de usuário

const UserSchema = new mongoose.Schema({<br>
<br>  name: {
<br>    type: String,
<br>    required: true,
<br>  },
<br>  email: {
    <br>type: String,
    <br>required: true,
    <br>unique: true,
    <br>lowercase: true,
  <br>},
  <br>password: {
    <br>type: String,
    <br>required: true,
    <br>select: false, // Não retorna a senha ao consultar o usuário
  <br>},
  <br>createdAt: {
    <br>type: Date,
    <br>default: Date.now,
  <br>},
<br>});

// Função de hash da senha antes de salvar no banco de dados

<br>UserSchema.pre("save", async function (next) {
  <br>try {
    <br>const hash = await bcryptjs.hash(this.password, 10); // Use o número de salt rounds adequado (exemplo: 10)
    <br>console.log(this);
    <br>console.log(hash);
    <br>this.password = hash; // Substitui a senha original pelo hash gerado
    <br>next();
  <br>} catch (error) {
    <br>next(error);
  <br>}
<br>});

// Cria o modelo de usuário com base no esquema definido
<br>const User = mongoose.model('User', UserSchema);

// Exporta o modelo para uso em outras partes do aplicativo
<br>module.exports = User;

### Apontamentos
O código começa importando as bibliotecas mongoose e bcryptjs. O mongoose é uma biblioteca ODM (Object-Document Mapping) usada para interagir com o banco de dados MongoDB, enquanto bcryptjs é usado para criptografar senhas.

Em seguida, é definido um esquema para o modelo de usuário usando o mongoose.Schema. Este esquema descreve a estrutura dos documentos de usuário no banco de dados. Ele inclui campos como nome, email, senha (criptografada) e a data de criação do usuário.

A função pre é usada para executar uma ação antes que um documento de usuário seja salvo no banco de dados. No caso, a função de hash da senha é executada usando o bcryptjs para garantir que as senhas sejam armazenadas de forma segura.

O modelo de usuário é criado usando mongoose.model. Isso permite que você crie, atualize, consulte e exclua documentos de usuário no MongoDB.

Finalmente, o modelo de usuário é exportado para que possa ser utilizado em outras partes do aplicativo.

### Sequência
1. O usuário envia uma solicitação de criação de conta com um nome, email e senha.
2. O servidor recebe a solicitação e inicia o processo de criação de usuário.
3. Antes de salvar os detalhes do usuário no banco de dados, a função pre é acionada.
4. A função bcryptjs.hash é usada para gerar um hash da senha fornecida.
5. O hash da senha substitui a senha original no objeto de usuário.
6. O usuário é salvo no banco de dados MongoDB com a senha criptografada.
7. O servidor responde com uma confirmação de criação de conta.


## Server
O server.js é a instância que concatena todas as partes da API e a coloca em estado funcional, inicializa os controladores de rotas, cria o aplicativo em si, e efetivamente inicia o funcionamento do servidor da API.

// Importa o framework Express
<br>const express = require('express');

// Importa os controladores (controllers) necessários
<br>const AuthController = require('./controllers/AuthController');
<br>const AdminController = require('./controllers/AdminController');

// Importa o middleware de autenticação personalizado
<br>const authenticateMiddleware = require('./middlewares/authenticate');

// Cria uma instância do aplicativo Express
<br>const app = express();

// Define o uso do middleware para análise de JSON nas solicitações
<br>app.use(express.json());

// Define rotas e controladores
<br>// Rota '/auth' com AuthController
<br>app.use('/auth', AuthController);

// Rota '/admin' com autenticação usando o middleware authenticateMiddleware
<br>app.use('/admin', authenticateMiddleware, AdminController);

// Inicia o servidor na porta 3001
<br>app.listen(3001, () => {
  <br>console.log('O servidor está rodando na porta 3001');
<br>});

### Apontamentos
O código começa importando o framework Express, que é usado para criar e gerenciar servidores HTTP em Node.js.

Em seguida, os controladores AuthController e AdminController são importados. Esses controladores são responsáveis por lidar com as solicitações HTTP nas rotas correspondentes.

O middleware de autenticação personalizado authenticateMiddleware também é importado. Ele será usado para autenticar as solicitações na rota '/admin'.

Uma instância do aplicativo Express é criada usando express().

O aplicativo Express é configurado para analisar o corpo das solicitações como JSON usando express.json().

Rotas e controladores são definidos usando app.use(). A rota '/auth' está associada ao AuthController, e a rota '/admin' está associada ao AdminController, com autenticação sendo aplicada por meio do middleware authenticateMiddleware.

O servidor é iniciado na porta 3001 usando app.listen(), e uma mensagem de log é exibida para indicar que o servidor está rodando.

### Sequência

1. As solicitações de entrada são recebidas pelo aplicativo Express na porta 3001.
2. O middleware express.json() analisa o corpo das solicitações JSON.
3. As solicitações com destino à rota '/auth' são encaminhadas para o AuthController.
4. As solicitações com destino à rota '/admin' passam pelo middleware authenticateMiddleware para autenticação antes de serem encaminhadas para o AdminController.










<  span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>
Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
