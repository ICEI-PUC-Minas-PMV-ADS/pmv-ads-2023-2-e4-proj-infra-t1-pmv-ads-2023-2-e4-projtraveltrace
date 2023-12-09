import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const TravelList = ({ data }) => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{`${item.pais}, ${item.cidade}`}</Title>
        <Paragraph>{`Data: ${item.data_inicio} - ${item.data_fim}`}</Paragraph>
        <Paragraph>{`Descrição: ${item.descricao}`}</Paragraph>
        <Paragraph>{`Valor: ${item.valor}`}</Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default TravelList;