-- Criação da tabela de cadastro
CREATE TABLE cadastro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(200) NOT NULL,
    email VARCHAR(200) UNIQUE NOT NULL,
    senha VARCHAR(8) NOT NULL
);
