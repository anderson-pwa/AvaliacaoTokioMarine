import React, { useRef, useState, useEffect } from 'react';
import {} from 'react-native';
import {Keyboard, KeyboardAvoidingView, TextInput, Image, Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Componentes/Header';
import styles from './style';
import Footer from '../Componentes/Footer';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';

import CardOperacao from '../Componentes/CardOperacao';


import api from '../../services/api'
import banner from '../../../assets/banner-v2.png';
import icone from '../../../assets/botao_ok.png';

export default function FOperacao({ navigation }) {

    const [operacao, setOperacao] = useState();
    const [carga, setCarga] = useState(false);
    const [contaOrigem, setContaOrigem] = useState('');
    const [contaDestino, setContaDestino] = useState('');
    const [valorTransferencia, setValorTransferencia] = useState('');
    const [dataTransferencia, setDataTransferencia] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const inputRef = useRef(null);
    const [ligarCalendario, setLigarCalendario] = useState(true);
    

    useEffect(() => {
        setLigarCalendario(true);
         if(navigation.state.params){
          setOperacao(navigation.state.params.operacao);
        }
      }, []);

      async function Processar() {
        if(contaOrigem === '') {
            Alert.alert('Informe a Conta de Origem');
            navigation.navigate('Home');
            return;
        }
        if(contaDestino === '') {
            Alert.alert('Informe a Conta de Destino');
            navigation.navigate('Home');
            return;
        }
        if(valorTransferencia === '') {
            Alert.alert('Informe o Valor da Transferência');
            navigation.navigate('Home');
            return;
        }
        if(dataTransferencia === '') {
            Alert.alert('Informe a Data de Transferência');
            navigation.navigate('Home');
            return;
        }

        const postData = {
            id: '0',
            contaOrigem: contaOrigem,
            contaDestino: contaDestino,
            valorTransferencia: valorTransferencia,
            taxaAplicada: 0,
            dataTransferencia: dataTransferencia,
            dataAgendamento: null,
            operacao: operacao,
          };

          await api.post('/api/v1/agendamento/salvar', postData)
            .then(response => {
                Alert.alert('Transferência Agendada!');
            }).catch(function (error) {
                Alert.alert('Erro no Agendamento da Transferência. Verifique os Parametros');
            });
        navigation.navigate('Home');
      }
      

      function ajustaFormatoData(data) {
        const [ano, mes, dia] = data.split('-');
        const dataNova = dia+"/"+mes+"/"+ano;
        setDatePickerVisibility(false);
        Keyboard.dismiss();
        return dataNova;
      }

      function calendario() {
        Keyboard.dismiss();
        if(ligarCalendario) {
            setDatePickerVisibility(true);
            setLigarCalendario(false);
        }
        else {
            setDatePickerVisibility(false);
            setLigarCalendario(true);
        }
      }

 
    return ( 
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Header/>
        <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>          
            <Image source={banner} style={styles.banner} ></Image>
                <View style={{ height: 10 }} />
                <Text style={styles.label}>Conta de Origem</Text>
                <TextInput 
                    style={styles.input} 
                    maxLength={200}
                    placeholder="Informe a Conta de Origem: 999999"
                    onChangeText={(text) => setContaOrigem(text)}
                    value={contaOrigem}
                />
                <View style={{ height: 10 }} />
                <Text style={styles.label}>Conta de Destino</Text>
                <TextInput 
                    style={styles.input} 
                    maxLength={200}
                    placeholder="Informe a Conta de Destino: 999999"
                    onChangeText={(text) => setContaDestino(text)}
                    value={contaDestino}
                />
                <View style={{ height: 10 }} />
                <Text style={styles.label}>Valor da Transferência</Text>
                <TextInput 
                    style={styles.input} 
                    maxLength={200} 
                    placeholder="Informe o Valor da Transferência"
                    onChangeText={(text) => setValorTransferencia(text)}
                    value={valorTransferencia}
                />
                <View style={{ height: 10 }}></View>
                <Text style={styles.label}>Data da Transferência</Text>
                <TextInput
                    style={styles.input}
                    value={dataTransferencia}
                    placeholder="Informe a Data de Transferência"
                    ref={inputRef}
                    blurOnSubmit={true}
                    onFocus={() => calendario()}
                    />
                    {isDatePickerVisible && (
                        <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={(date) => {
                            setDataTransferencia(ajustaFormatoData(date.toISOString().substring(0, 10)));
                            setLigarCalendario(true);
                        }}
                        onCancel={() => setDatePickerVisibility(false)}
                        />
                    )}
        </ScrollView>
        <Footer onPress={() => Processar()} icone={icone} />
     </KeyboardAvoidingView>
    );
}