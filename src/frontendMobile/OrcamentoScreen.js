import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../theme';

export default function OrcamentoScreen({ navigation }) {
  const [pais, setPais] = useState({ value: '', error: '' });
  const [cidade, setCidade] = useState({ value: '', error: '' });
  const [valor, setValor] = useState({ value: '', error: '' });

  const onSavePressed = () => {
    // Lógica de validação dos campos de orçamento
    // Aqui você pode implementar validações semelhantes às usadas no CadastroScreen

    // Exemplo simples de validação
    if (!pais.value || !cidade.value || !valor.value) {
      setPais({ ...pais, error: 'Preencha o país' });
      setCidade({ ...cidade, error: 'Preencha a cidade' });
      setValor({ ...valor, error: 'Preencha o valor' });
      return;
    }

    // Lógica para salvar o orçamento
    // navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Orçamento</Header>
      <TextInput
        label="País"
        returnKeyType="next"
        value={pais.value}
        onChangeText={(text) => setPais({ value: text, error: '' })}
        error={!!pais.error}
        errorText={pais.error}
      />
      <TextInput
        label="Cidade"
        returnKeyType="next"
        value={cidade.value}
        onChangeText={(text) => setCidade({ value: text, error: '' })}
        error={!!cidade.error}
        errorText={cidade.error}
      />
      <TextInput
        label="Valor"
        returnKeyType="done"
        value={valor.value}
        onChangeText={(text) => setValor({ value: text, error: '' })}
        error={!!valor.error}
        errorText={valor.error}
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        onPress={onSavePressed}
        style={{ marginTop: 24 }}
      >
        Salvar Orçamento
      </Button>
      {/* Restante do código da tela de cadastro que não se aplica */}
    </Background>
  );
}

const styles = StyleSheet.create({
  // Estilos da tela, se necessário
});