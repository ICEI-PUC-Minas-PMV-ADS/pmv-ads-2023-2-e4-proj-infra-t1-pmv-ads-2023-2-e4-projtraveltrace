import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import TravelList from '../components/TravelList';

const PlanejamentosScreen = () => {
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/viagens/');
        setViagens(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error.message);
        if (error.response) {
          // O request foi feito e o servidor respondeu com um status de erro
          console.error('Status do erro:', error.response.status);
          console.error('Dados do erro:', error.response.data);
        } else if (error.request) {
          // O request foi feito, mas não houve resposta do servidor
          console.error('Erro de requisição:', error.request);
        } else {
          // Algo aconteceu na configuração do request e gerou o erro
          console.error('Erro ao configurar a requisição:', error.message);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TravelList data={viagens} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default PlanejamentosScreen;