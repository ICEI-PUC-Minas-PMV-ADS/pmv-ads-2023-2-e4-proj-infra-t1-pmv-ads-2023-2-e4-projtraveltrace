import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../theme'
import * as UsuarioDB from '../db/UsuarioDB'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [errorNome, setErrorNome] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [senha, setSenha] = useState({ value: '', error: '' })
  const [confirmarSenha, setConfirmarSenha] = useState(null);

  const validar = () => {
    let error = false
    setErrorEmail(null)
    setErrorSenha(null)
    setErrorNome(null)

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail("Preencha seu e-mail corretamente")
      error = true
    }
    if (senha == null) {
      setErrorSenha("Preencha sua senha corretamente")
      error = true
    }
    if (senha !== confirmarSenha) {
      setErrorSenha('As senhas não coincidem');
      error = true;
    }
    if (nome == null)
      setErrorNome("Preencha seu nome")
    return !error
  }

  useEffect(() => {
    UsuarioDB.criarTabelaUsuarios()
      .then(() => {
        console.log('Tabela de usuários criada com sucesso');
      })
      .catch((error) => {
        console.error('Erro ao criar tabela de usuários:', error);
      });
  }, []);


  const salvar = () => {
    if (validar()) {
      setLoading(true)

      let usuarioCriado = {
        nome: nome,
        email: email,
        senha: senha
      }

      UsuarioDB.salvarUsuario(usuarioCriado)
        .then(() => {
          setLoading(false);
          AsyncStorage.setItem('usuario', JSON.stringify(usuarioCriado)); // Armazene os dados do usuário
          Alert.alert('Sucesso', 'Usuário cadastrado com sucesso', [
            { text: 'OK', onPress: () => navigation.goBack() }
          ]);
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert('Erro', 'Houve um erro inesperado ao salvar o usuário.');
          console.error('Erro ao salvar usuário:', error);
        });
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome.</Header>
      <TextInput
        label="Nome"
        returnKeyType="next"
        onChangeText={value => setNome(value)}
        error={!!nome.error}
        errorText={errorNome}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        onChangeText={value => setEmail(value)}
        error={!!email.error}
        errorText={errorEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        onChangeText={value => setSenha(value)}
        error={!!senha.error}
        errorText={errorSenha}
        secureTextEntry
      />
      <TextInput
        label="Confirmar senha"
        returnKeyType="done"
        onChangeText={value => setConfirmarSenha(value)}
        error={!!senha.error}
        errorText={errorSenha}
        secureTextEntry
      />
      {isLoading &&
              <Text>Carregando...</Text>
      }

      {!isLoading &&
      <Button
        mode="contained"
        onPress={() => salvar()}
        style={{ marginTop: 24 }}
      >
        Next
      </Button>
      }
      <View style={styles.row}>
        <Text>I already have an account !</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
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
})