import React from 'react';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

// Componente WebLink separado
const WebLink = ({ navigation }) => {
  const handlePress = () => {
    const url = 'https://gabriel-ildefonso.github.io/Travel-Trace-Home/';

    Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: 'blue', fontSize: 20 }}>Visite o site</Text>
    </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {
  const navigateToOrcamento = () => {
    navigation.navigate('OrcamentoScreen'); // Substitua 'Orcamento' pelo nome da tela de orçamento
  };

  const navigateToRotas = () => {
    navigation.navigate('Rotas'); // Substitua 'Rotas' pelo nome da tela de rotas
  };

  const navigateToPlanejamentos = () => {
    navigation.navigate('PlanejamentosScreen');
  }

  return (
    <Background>
      <Logo />
      <Header>Planeje aqui a sua viagem!</Header>
      <Button mode="contained" onPress={navigateToOrcamento}>
        Orçamento
      </Button>
      <Button mode="contained" onPress={navigateToRotas}>
        Rotas
      </Button>
      <Button mode="contained" onPress={navigateToPlanejamentos}>
        Meus Planejamentos
      </Button>
      <Header>Indeciso quanto ao destino?</Header>
      <WebLink navigation={navigation} />
    </Background>
  );
}

const styles = StyleSheet.create({
  // Adicione estilos adicionais conforme necessário
});

export default HomeScreen;

