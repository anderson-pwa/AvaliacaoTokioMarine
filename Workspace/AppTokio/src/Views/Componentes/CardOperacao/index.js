import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
//import { format } from 'date-fns';

import styles from './styles';

// COLEÇÃO DE ÍCONES
// import typeIcons from '../../utils/typeIcons';

export default function CardOperacao({ nome, descricao, onPress }){
  return (
    <TouchableOpacity style={[styles.card, styles.done]} onPress={onPress}>
      <View style={styles.cardLeft}>
        <Text style={styles.cardTitle}>{nome} =={'>'} {descricao}</Text>
      </View>
    </TouchableOpacity>
  )
} 

