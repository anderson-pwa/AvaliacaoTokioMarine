import React, { useState, useEffect } from 'react';
import {} from 'react-native';
import { Image, Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Header from '../Componentes/Header';
import Styles from './style';
import Footer from '../Componentes/Footer';
import CardOperacao from '../Componentes/CardOperacao';

import api from '../../services/api'
import banner from '../../../assets/banner-v2.png';

import icone from '../../../assets/listar.png';
 
  

export default function Home({ navigation }) {

    const [operacoes, setOperacoes] = useState([]);
    const [carga, setCarga] = useState(false);

    function Novo(operacao) {
      navigation.navigate('FOperacao', {operacao: operacao});
    }

    function Listar() {
      navigation.navigate('Listar');
    }

    async function carregarOperacoes(){
        setCarga(true);
        await api.get('/api/v1/operacao/listarvigentes')
        .then(response => {
          setOperacoes(response.data)      
          setCarga(false)
        });
      }

      useEffect(() => {
          carregarOperacoes();
      }, []) 

      function ok() {
        Alert.alert('OK');
      }

 
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
            operacoes.map(t => 
            (
              <CardOperacao key={t.nome}
                descricao={t.descricao} 
                nome={t.nome} 
                onPress={() => Novo(t)}           
              />   
            ))       
          }
        </ScrollView>



        <Footer onPress={Listar} icone={icone} />
    </View>
    );
}