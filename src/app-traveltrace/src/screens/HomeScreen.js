import React from 'react';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import LogoutIcon from '../components/LogoutIcon';

// Componente WebLink separado
const WebLink = ({ navigation }) => {
  const handlePress = () => {
    const url = 'https://gabriel-ildefonso.github.io/Travel-Trace-Home/';

    Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: '#3894FC', fontSize: 18 }}>Visite o site</Text>
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
    navigation.navigate('ListaPlanejamentos');
  }

  return (
    <Background>
      <Logo />
      <Header>Planeje aqui a sua viagem!</Header>
      <Button mode="contained" onPress={navigateToOrcamento}>
        Criar Planejamento
      </Button>
      <Button mode="contained" onPress={navigateToPlanejamentos}>
        Meus Planejamentos
      </Button>
      <Header>Indeciso quanto ao destino?</Header>
      <WebLink navigation={navigation} />
      <LogoutIcon navigation={navigation}></LogoutIcon>
    </Background>
  );
}

const styles = StyleSheet.create({

});

export default HomeScreen;

