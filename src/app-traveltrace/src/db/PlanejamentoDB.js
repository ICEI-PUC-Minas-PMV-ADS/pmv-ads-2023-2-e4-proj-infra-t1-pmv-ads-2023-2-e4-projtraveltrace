import * as SQLite from 'expo-sqlite';
import { format } from 'date-fns';

const db = SQLite.openDatabase('mydatabase.db');

export const criarTabelaPlanejamentos = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS planejamentos (id INTEGER PRIMARY KEY AUTOINCREMENT, pais TEXT, cidade TEXT, valor TEXT, data_ida TEXT, data_volta TEXT, descricao TEXT)',
        [],
        () => {
          console.log('Tabela planejamentos criada com sucesso');
          resolve();
        },
        error => {
          console.error('Erro ao criar tabela planejamentos: ', error);
          reject(error);
        }
      );
    });
  });
};

const formatDate = (date) => {
  try {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }
    return format(date, 'dd/MM/yyyy'); // Ajuste o formato conforme necessário
  } catch (error) {
    console.error('Error formatting date:', error);
    return null;
  }
};

export const salvarPlanejamento = (planejamentoCriado, setPlanejamentosAtualizados) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO planejamentos (pais, cidade, valor, data_ida, data_volta, descricao) VALUES (?, ?, ?, ?, ?, ?)',
        [
          planejamentoCriado.pais.value,
          planejamentoCriado.cidade.value,
          planejamentoCriado.valor.value,
          formatDate(planejamentoCriado.data_ida), // Remova o .value para passar diretamente o objeto Date
          formatDate(planejamentoCriado.data_volta), // Remova o .value para passar diretamente o objeto Date
          planejamentoCriado.descricao.value
        ],
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) {
            console.log('Planejamento cadastrado com sucesso. ID: ', insertId);
            resolve();
          } else {
            reject('Falha ao cadastrar o planejamento');
          }
        },
        error => {
          reject('Erro ao inserir o planejamento no banco de dados: ' + error.message);
        }
      );
    }, reject, setPlanejamentosAtualizados);
  });
};



export const atualizarPlanejamento = (planejamentoAtualizado) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE planejamentos SET pais=?, cidade=?, valor=?, data_ida=?, data_volta=?, descricao=? WHERE id=?',
        [planejamentoAtualizado.pais, planejamentoAtualizado.cidade, planejamentoAtualizado.valor, planejamentoAtualizado.data_ida, planejamentoAtualizado.data_volta, planejamentoAtualizado.descricao, planejamentoAtualizado.id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            console.log('Planejamento atualizado com sucesso');
            resolve(); // Resolva a promessa quando o planejamento for atualizado com sucesso
          } else {
            reject('Falha ao atualizar o planejamento');
          }
        },
        error => {
          reject('Erro ao atualizar o planejamento no banco de dados: ' + error.message);
        }
      );
    });
  });
};


export const getCadastroPlanejamento = (searchQuery) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      let query = 'SELECT * FROM planejamentos';
      let params = [];

      if (searchQuery) {
        query += ' WHERE pais LIKE ?';
        params.push(`%${searchQuery}%`);
      }

      console.log('Executing SELECT query...');
      tx.executeSql(
        query,
        params,
        (_, { rows }) => {
          console.log('Consulta SELECT bem-sucedida:', rows);
          resolve(rows._array);
        },
        (_, error) => {
          console.error('Erro na consulta SELECT:', error);
          reject(error);
        }
      );
    });
  });
};


export const deleteCadastroPlanejamento = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM planejamentos WHERE id=?',
        [id],
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};