import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { deleteCadastroPlanejamento, getCadastroPlanejamento } from '../db/PlanejamentoDB';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { TextInput } from 'react-native';
import BackButton from '../components/BackButton';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const ListaPlanejamentos = ({ navigation }) => {
  const [planejamentos, setPlanejamentos] = useState([]);
  const route = useRoute();
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
      <TouchableOpacity style={styles.planejamentoContainer}>
        <View style={styles.planejamentoInfo}>
          <Text style={styles.planejamentoPais}>País: {item.pais}</Text>
          <Text style={styles.planejamentoCidade}>Cidade: {item.cidade}</Text>
          <Text style={styles.planejamentoValor}>Valor: R$ {item.valor},00</Text>
          <Text style={styles.planejamentoDataIda}>Data de ida: {item.data_ida}</Text>
          <Text style={styles.planejamentoDataVolta}>Data de volta: {item.data_volta}</Text>
          <Text style={styles.planejamentoDescricao}>Descrição: {item.descricao}</Text>
          <Button title="Excluir" onPress={() => handleDelete(item.id)} />
        </View>
      </TouchableOpacity>
    );
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
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
    backgroundColor: 'grey',
  },
  listContainer: {
    paddingBottom: 20,
  },
  planejamentoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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
    marginBottom: 5,
  },
  planejamentoCidade: {
    fontSize: 16,
    marginBottom: 5,
  },
  planejamentoValor: {
    fontSize: 16,
    marginBottom: 5,
  },
  planejamentoDataIda: {
    fontSize: 16,
    marginBottom: 5,
  },
  planejamentoDataVolta: {
    fontSize: 16,
    marginBottom: 5,
  },
  planejamentoDescricao: {
    fontSize: 16,
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
    marginTop: 70,
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