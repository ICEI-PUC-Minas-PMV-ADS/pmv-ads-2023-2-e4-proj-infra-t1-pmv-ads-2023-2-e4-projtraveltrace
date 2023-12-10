import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanejamentoCriado = ({ route }) => {
  const { planejamento } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes do Planejamento</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>País:</Text>
        <Text style={styles.info}>{planejamento.pais.value}</Text>

        <Text style={styles.label}>Cidade:</Text>
        <Text style={styles.info}>{planejamento.cidade}</Text>

        <Text style={styles.label}>Valor:</Text>
        <Text style={styles.info}>{planejamento.valor}</Text>

        <Text style={styles.label}>Data de Ida:</Text>
        <Text style={styles.info}>{planejamento.data_ida}</Text>

        <Text style={styles.label}>Data de Volta:</Text>
        <Text style={styles.info}>{planejamento.data_volta}</Text>

        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.info}>{planejamento.descricao}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#278ED5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default PlanejamentoCriado;