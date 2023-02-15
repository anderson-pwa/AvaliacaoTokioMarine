import React, { useState, useEffect } from 'react';
import {} from 'react-native';
import { Image, Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Componentes/Header';
import Styles from './style';
import Footer from '../Componentes/Footer';
import CardTransferencia from '../Componentes/CardTransferencia';

import api from '../../services/api'
import banner from '../../../assets/banner-v2.png';

import icone from '../../../assets/botao_ok.png';
 
  

export default function Listar({ navigation }) {

    const [agendamentos, setAgendamentos] = useState([]);
    const [carga, setCarga] = useState(false);

    function Home() {
      navigation.navigate('Home');
    }

    async function carregarAgendamentos(){
        setCarga(true);
        await api.get('/api/v1/agendamento/listar')
        .then(response => {
          setAgendamentos(response.data)      
          setCarga(false)
        });
      }

      useEffect(() => {
          carregarAgendamentos();
      }, []) 

    return ( 
    <View style={Styles.container}>
        <Header/>
        <Image source={banner} ></Image>
        <ScrollView style={Styles.content} contentContainerStyle={{alignItems: 'center'}}>          
          {
            carga 
            ? 
            <ActivityIndicator color='#EE6B26' size={50}/>
            :
            agendamentos.map(t => 
            (
              <CardTransferencia key={t.id}
                contaOrigem={t.contaOrigem} 
                contaDestino={t.contaDestino}
                valor={t.valorTransferencia}
                dataTransferencia={t.dataTransferencia}
                taxa={t.taxaAplicada}   
                dataAgendamento={t.dataAgendamento}         
              />   
            ))       
          }
        </ScrollView>
        <Footer onPress={Home} icone={icone} />
    </View>
    );
}