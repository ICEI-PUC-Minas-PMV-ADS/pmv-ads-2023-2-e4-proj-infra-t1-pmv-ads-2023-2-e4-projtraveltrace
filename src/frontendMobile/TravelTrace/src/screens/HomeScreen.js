import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

// Componente WebLink separado
const WebLink = () => {
  const handlePress = () => {
    const url = 'https://gabriel-ildefonso.github.io/Travel-Trace-Home/';

    Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: 'blue', fontSize: 20,  }}>Visite o site</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    return (
    <Background>
      <Logo />
      <Header>Planeje aqui a sua viagem!</Header>
      <Button mode="contained">Orçamento</Button>
      <Button mode="contained">Rotas</Button>
      <Header>Indeciso quanto ao destino?</Header>
      <WebLink />
    </Background>
  );
  );
}
