// Importa a biblioteca jsonwebtoken (JWT) para autenticação
const jwt = require('jsonwebtoken');

// Importa a configuração de autenticação do arquivo auth.json
const authConfig = require('../config/auth.json');

// Exporta o middleware de autenticação para uso em rotas protegidas
module.exports = (req, res, next) => {
  // Obtém o cabeçalho de autorização da solicitação
  const authHeader = req.headers.authorization;

  // Verifica se o cabeçalho de autorização está ausente
  if (!authHeader) {
    return res.status(401).json({
      error: true,
      message: 'Token não provido',
    });
  }

  // Divide o cabeçalho de autorização em partes (Bearer e o token)
  const parts = authHeader.split(' ');

  // Verifica se o token está no formato adequado (Bearer <token>)
  if (parts.length !== 2) {
    return res.status(401).json({
      error: true,
      message: 'Tipo de token inválido',
    });
  }

  const [scheme, token] = parts;

  // Verifica se o esquema do token é "Bearer"
  if (scheme.indexOf('Bearer') !== 0) {
    return res.status(401).json({
      error: true,
      message: 'Token mal formatado',
    });
  }

  // Verifica a validade e autentica o token usando o segredo do auth.json
  return jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: 'Token inválido/expirado',
      });
    }

    // Anexa os dados do usuário decodificado à solicitação para uso posterior
    req.userLogged = decoded;

    // Continua o fluxo de execução para a próxima função/middleware
    return next();
  });
};
