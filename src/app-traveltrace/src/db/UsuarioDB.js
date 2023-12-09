import * as SQLite from 'expo-sqlite';
import { CryptoDigestAlgorithm, digestStringAsync } from 'expo-crypto';

const db = SQLite.openDatabase('mydatabase.db');

export const criarTabelaUsuarios = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, senha TEXT)',
        [],
        () => {
          console.log('Tabela usuarios criada com sucesso');
          resolve();
        },
        (error) => {
          console.error('Erro ao criar tabela usuarios: ', error);
          reject(error);
        }
      );
    });
  });
};

export const salvarUsuario = async (usuarioCriado, callback) => {
  try {
    // Verifica se a senha é nula ou indefinida
    if (usuarioCriado.senha === null || usuarioCriado.senha === undefined) {
      throw new Error('A senha não pode ser nula ou indefinida.');
    }

    console.log('Valor da senha:', usuarioCriado.senha);
    const senhaString = String(usuarioCriado.senha);
    const senhaHash = await digestStringAsync(
      CryptoDigestAlgorithm.SHA256,
      senhaString,
      { encoding: 'hex' }
    );

    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        console.log('Iniciando transação');
        tx.executeSql(
          'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
          [usuarioCriado.nome, usuarioCriado.email, senhaHash],
          (_, { rowsAffected, insertId }) => {
            console.log('');
            if (rowsAffected > 0) {
              console.log('Usuário cadastrado com sucesso. ID: ', insertId);
              console.log(senhaHash);
              resolve();
            } else {
              console.error('Falha ao cadastrar o usuário');
              reject(new Error('Falha ao cadastrar o usuário'));
            }
          },
          (error) => {
            console.error(
              'Erro ao inserir o usuário no banco de dados: ',
              error
            );
            reject(error);
          }
        );
      }, (transactionError) => {
        console.error('Erro durante a transação: ', transactionError);
        reject(transactionError);
      }, () => {
        console.log('Transação concluída');
        if (callback) {
          callback(); // Chama o callback passado como parâmetro
        }
        resolve(); // Resolve a promise quando a transação é concluída
      });
    });
  } catch (error) {
    console.error('Erro ao calcular o hash da senha: ', error);
    throw error;
  }
};


export const getCadastroUsuarios = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM usuarios',
        [],
        (_, { rows }) => {
          resolve(rows._array);
        },
        (_, error) => {
          reject(error);
        }
      );
    }, (transactionError) => {
      console.error('Erro durante a transação: ', transactionError);
      reject(transactionError);
    }, () => {
      console.log('Transação concluída');
    });
  });
};

export const buscarUsuario = async (email, senha) => {
  try {
    if (!senha) {
      throw new Error('Senha não pode ser nula ou indefinida.');
    }

    const senhaString = String(senha);

    const senhaHash = await digestStringAsync(
      CryptoDigestAlgorithm.SHA256,
      senhaString,
      { encoding: 'hex' }
    );

    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
          [email, senhaHash],
          (_, result) => {
            const rows = result.rows;

            if (rows.length > 0) {
              const usuario = rows.item(0);
              resolve(usuario);
            } else {
              resolve(null);
            }
          },
          (_, error) => {
            console.error('Erro ao executar SQL:', error);
            reject(error);
          }
        );
      }, (transactionError) => {
        console.error('Erro durante a transação: ', transactionError);
        reject(transactionError);
      }, () => {
        console.log('Transação concluída');
      });
    });
  } catch (error) {
    console.error('Erro ao calcular o hash da senha: ', error);
    throw error;
  }
};

export const atualizarUsuario = (id, novosDados) => {
  console.log('ID do usuário:', id);
  console.log('Novos dados:', novosDados);
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
          [novosDados.nome, novosDados.email, id],
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) {
              console.log('Usuário atualizado com sucesso');
              resolve();
            } else {
              console.error('Falha ao atualizar o usuário');
              reject(new Error('Falha ao atualizar o usuário: nenhum registro afetado'));
            }
          },
          (error) => {
            console.error('Erro ao atualizar o usuário no banco de dados: ', error);
            reject(new Error(`Erro ao atualizar o usuário: ${error.message}`));
          }
        );
      },
      (transactionError) => {
        console.error('Erro durante a transação: ', transactionError);
        reject(new Error(`Erro durante a transação: ${transactionError.message}`));
      },
      () => {
        console.log('Transação concluída');
      }
    );
  });
};