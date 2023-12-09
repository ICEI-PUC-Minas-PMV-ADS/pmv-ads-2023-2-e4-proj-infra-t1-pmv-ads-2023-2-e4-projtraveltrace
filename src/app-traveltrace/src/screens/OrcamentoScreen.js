import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Text, Button as PaperButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import axios from 'axios'; // Importe o Axios
import { criarTabelaPlanejamentos, salvarPlanejamento } from '../db/PlanejamentoDB';

export default function OrcamentoScreen({ navigation }) {
  const [pais, setPais] = useState({ value: '', error: '' });
  const [cidade, setCidade] = useState({ value: '', error: '' });
  const [valor, setValor] = useState({ value: '', error: '' });
  const [dataIda, setDataIda] = useState(new Date());
  const [dataVolta, setDataVolta] = useState(new Date());
  const [descricao, setDescricao] = useState({ value: '', error: '' });
  const [showDataIdaPicker, setShowDataIdaPicker] = useState(false);
  const [showDataVoltaPicker, setShowDataVoltaPicker] = useState(false);

  useEffect(() => {
    criarTabelaPlanejamentos().then(() => {
      console.log('Tabela de planejamentos criada com sucesso.');
    }).catch(error => {
      console.error('Erro ao criar tabela de planejamentos:', error);
    });
  }, []);

  const handlePlanejamento = async () => {
    if (pais === '' || cidade === '' || valor === '' || dataIda === '' || dataVolta === '' || descricao === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    } else {
      const planejamentoCriado = {
        pais: pais,
        cidade: cidade,
        valor: valor,
        data_ida: dataIda,
        data_volta: dataVolta,
        descricao: descricao,
        criador: 'usuario_atual',
      };

      try {
        await salvarPlanejamento(planejamentoCriado);
        Alert.alert(
          'Sucesso',
          'Planejamento criado com sucesso!',
          [
            {
              text: 'Início',
              onPress: () => {
                limparFormulario();
                navigation.navigate('HomeScreen');
              },
            },
            {
              text: 'Novo Planejamento',
              onPress: () => {
                limparFormulario();
              },
            },
          ]
        );
      } catch (error) {
        console.error('Erro ao salvar o planejamento:', error);
      }
    }
  };

  const limparFormulario = () => {
    setPais('');
    setCidade('');
    setValor('');
    setDescricao('');
  };

  const showDataIdaPickerModal = () => {
    setShowDataIdaPicker(true);
  };

  const showDataVoltaPickerModal = () => {
    setShowDataVoltaPicker(true);
  };

  const hideDataIdaPickerModal = () => {
    setShowDataIdaPicker(false);
  };

  const hideDataVoltaPickerModal = () => {
    setShowDataVoltaPicker(false);
  };

  const handleDataIdaChange = (event, selectedDate) => {
    hideDataIdaPickerModal();
    setDataIda(selectedDate || dataIda);
  };

  const handleDataVoltaChange = (event, selectedDate) => {
    hideDataVoltaPickerModal();
    setDataVolta(selectedDate || dataVolta);
  };

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return 'Data Inválida';
    }
  
    return date.toLocaleDateString('pt-BR'); 
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Background>
          <BackButton goBack={navigation.goBack} />
          <Logo />
          <Header>Planejamento</Header>
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
            returnKeyType="next"
            value={valor.value}
            onChangeText={(text) => setValor({ value: text, error: '' })}
            error={!!valor.error}
            errorText={valor.error}
            keyboardType="numeric"
          />
          <View style={styles.dateContainer}>
            <View style={styles.datePickerColumn}>
              <Text>Data de Ida</Text>
              <PaperButton
                style={styles.datePickerButton}
                onPress={showDataIdaPickerModal}
              >
                {formatDate(dataIda)}
              </PaperButton>
              {showDataIdaPicker && (
                <DateTimePicker
                  value={dataIda}
                  mode="date"
                  display="default"
                  onChange={handleDataIdaChange}
                />
              )}
            </View>
          </View>

          <View style={styles.dateContainer}>
            <View style={styles.datePickerColumn}>
              <Text>Data de Volta</Text>
              <PaperButton
                style={styles.datePickerButton}
                onPress={showDataVoltaPickerModal}
              >
                {formatDate(dataVolta)}
              </PaperButton>
              {showDataVoltaPicker && (
                <DateTimePicker
                  value={dataVolta}
                  mode="date"
                  display="default"
                  onChange={handleDataVoltaChange}
                />
              )}
            </View>
          </View>
          <TextInput
            label="Descrição da Viagem"
            returnKeyType="done"
            value={descricao.value}
            onChangeText={(text) => setDescricao({ value: text, error: '' })}
            error={!!descricao.error}
            errorText={descricao.error}
            multiline
            numberOfLines={4}
          />
          <Button
            mode="contained"
            onPress={handlePlanejamento}
            style={{ marginTop: 24 }}
          >
            Salvar Orçamento
          </Button>
        </Background>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  datePickerButton: {
    marginTop: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 16,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
  },

  datePickerColumn: {
    flex: 1,
    marginRight: 8,
    alignItems: 'center',  // Adicione esta linha para centralizar o conteúdo verticalmente
  },
  // Estilos da tela, se necessário
});