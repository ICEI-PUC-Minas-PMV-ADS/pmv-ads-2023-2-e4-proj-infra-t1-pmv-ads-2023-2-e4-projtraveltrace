import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';
import { deleteCadastroPlanejamento, getCadastroPlanejamento } from '../db/PlanejamentoDB';
import { useFocusEffect } from '@react-navigation/native';
import { TextInput } from 'react-native';

const ListaPlanejamentos = () => {
  const [planejamentos, setPlanejamentos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPlanejamentos();
  }, [searchQuery]);

  useFocusEffect(
    React.useCallback(() => {
      fetchPlanejamentos();
    }, [])
  );

  const fetchPlanejamentos = async () => {
    try {
      const planejamentosData = await getCadastroPlanejamento(searchQuery);
      setPlanejamentos(planejamentosData.reverse()); 
    } catch (error) {
      console.error('Erro ao buscar os planejamentos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCadastroPlanejamento(id);
      fetchPlanejamentos();
    } catch (error) {
      console.error('Erro ao excluir o planejamento:', error);
    }
  };

  const renderPlanejamento = ({ item }) => {
    return (
      <TouchableOpacity onPress={handleSelecionarPlanejamento} style={styles.planejamentoContainer}>
        <View style={styles.planejamentoInfo}>
          <Text style={styles.planejamentoPlanejamento}>País: {item.pais}</Text>
          <Text style={styles.planejamentoCidade}>Cidade: {item.cidade}</Text>
          <Text style={styles.planejamentoValor}>Valor: {item.valor}</Text>
          <Text style={styles.planejamentoDataIda}>Data de Ida: {item.data_ida}</Text>
          <Text style={styles.planejamentoDataVolta}>Data de Volta: {item.data_volta}</Text>
          <Text style={styles.planejamentoDescricao}>Descrição: {item.descricao}</Text>
        </View>
        <Button title="Excluir" onPress={() => handleDelete(item.id)} />
      </TouchableOpacity>
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite o país do planejamento"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <Image source={require('../assets/lupa.png')} style={styles.searchIcon} />
      </View>
      <FlatList
        data={planejamentos}
        renderItem={renderPlanejamento}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#278ED5',
  },
  listContainer: {
    paddingBottom: 20,
  },
  planejamentoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  planejamentoInfo: {
    flex: 1,
    marginRight: 10,
  },
  planejamentoPais: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  planejamentoCidade: {
    fontSize: 19,
    marginBottom: 5,
  },
  planejamentoValor: {
    fontSize: 14,
    marginBottom: 5,
  },
  planejamentoDataIda: {
    fontSize: 14,
    marginBottom: 5,
  },
  planejamentoDataVolta: {
    fontSize: 14,
    marginBottom: 5,
  },
  planejamentoDescricao: {
    fontSize: 14,
    marginBottom: 5,
  },
  searchContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 50,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
});

export default ListaPlanejamentos;