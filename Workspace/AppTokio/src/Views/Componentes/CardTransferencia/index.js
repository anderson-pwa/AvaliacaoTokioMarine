import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
//import { format } from 'date-fns';

import styles from './styles';

// COLEÇÃO DE ÍCONES
// import typeIcons from '../../utils/typeIcons';

export default function CardTransferencia({ contaOrigem, contaDestino, valor, dataAgendamento, dataTransferencia, taxa, onPress }){
  return (
    <TouchableOpacity style={[styles.card, styles.done]} onPress={onPress}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardTitle}>Conta Origem: {contaOrigem} - Conta Destino: {contaDestino}</Text>
        <View style={{height:10}}></View>
        <Text style={styles.cardTitle}>Operação: {dataAgendamento} - Transferência: {dataTransferencia} </Text>
        <View style={{height:10}}></View>
        <Text style={styles.cardTitle}>Valor: {valor.toFixed(2)}                   - Taxa Aplicada: {taxa.toFixed(2)} </Text>
      </View>
    </TouchableOpacity>
  )
} 