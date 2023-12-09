import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../theme';
import { passwordValidator } from '../helpers/passwordValidator';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as UsuarioDB from '../db/UsuarioDB'
import { Alert } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState({ value: null, error: '' });
  const [senha, setSenha] = useState({ value: null, error: '' });
  const [nomeUsuario, setNomeUsuario] = useState(null);

  const entrar = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      const usuario = await UsuarioDB.buscarUsuario(email, senha);

      if (usuario) {
        setNomeUsuario(usuario.nome);
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Por favor, verifique se seu e-mail e senha estão corretos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro ao fazer login. Por favor, tente novamente mais tarde.');
      console.error('Erro ao fazer login:', error);
    }
  };

  const cadastrar = () => {
    navigation.navigate('CadastroScreen');
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Login</Header>
      <TextInput
        label="E-mail"
        returnKeyType="next"
        onChangeText={(value) => setEmail({ value, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        onChangeText={(value) => setSenha({ value, error: '' })}
        error={!!senha.error}
        errorText={senha.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={() => entrar()}>
        Login
      </Button>
      <View style={styles.row}>
        <Text> Você ainda não tem conta?</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => cadastrar()}>
          <Text style={styles.link}> Cadastrar!</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
