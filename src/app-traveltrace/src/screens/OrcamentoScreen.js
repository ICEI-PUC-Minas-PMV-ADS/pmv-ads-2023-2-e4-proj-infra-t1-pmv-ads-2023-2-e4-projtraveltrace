import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Text, Button as PaperButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import axios from 'axios'; // Importe o Axios
import { theme } from '../theme';

export default function OrcamentoScreen({ navigation }) {
  const [pais, setPais] = useState({ value: '', error: '' });
  const [cidade, setCidade] = useState({ value: '', error: '' });
  const [valor, setValor] = useState({ value: '', error: '' });
  const [dataIda, setDataIda] = useState(new Date());
  const [dataVolta, setDataVolta] = useState(new Date());
  const [descricao, setDescricao] = useState({ value: '', error: '' });
  const [showDataIdaPicker, setShowDataIdaPicker] = useState(false);
  const [showDataVoltaPicker, setShowDataVoltaPicker] = useState(false);

  const onSavePressed = async () => {
    // Lógica de validação dos campos de orçamento

    // Exemplo simples de validação
    if (!pais.value || !cidade.value || !valor.value || !dataIda || !dataVolta || !descricao.value) {
      setPais({ ...pais, error: 'Preencha o país' });
      setCidade({ ...cidade, error: 'Preencha a cidade' });
      setValor({ ...valor, error: 'Preencha o valor' });
      // Adicione validações para dataIda, dataVolta e descricao se necessário
      return;
    }

    try {
      const formattedDtIda = dataIda.toISOString().split('T')[0];
      const formattedDtVolta = dataVolta.toISOString().split('T')[0];

      const novoOrcamento = {
        pais: pais.value,
        cidade: cidade.value,
        data_inicio: formattedDtIda,
        data_fim: formattedDtVolta,
        descricao: descricao.value,
        valor: valor.value,
      };

      // Faz a chamada POST com o novo orçamento
      const response = await axios.post('http://127.0.0.1:8000/viagens/', novoOrcamento);

      // A chamada foi bem-sucedida, você pode lidar com a resposta conforme necessário
      console.log('Resposta da API:', response.data);

      // Lógica adicional, se necessário

      // navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] });
    } catch (error) {
      console.error('Erro ao salvar orçamento:', error);
      console.log('Detalhes do erro:', error.response.data);

      // Lógica adicional, se necessário
    }
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
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView contentContainerStyle={styles.scrollView}>
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
            returnKeyType="next"
            value={valor.value}
            onChangeText={(text) => setValor({ value: text, error: '' })}
            error={!!valor.error}
            errorText={valor.error}
            keyboardType="numeric"
          />
          <View style={styles.datePickerContainer}>
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
            onPress={onSavePressed}
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
  datePickerColumn: {
    flex: 1,
    marginRight: 8,
  },
  datePickerButton: {
    marginTop: 8,
  },
  // Estilos da tela, se necessário
});