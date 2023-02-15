import React from 'react';
import {
  View, 
  Image, 
  Text, 
  TouchableOpacity,
  Alert,
} from 'react-native';

import styles from './styles';


export default function Footer({ icone, onPress }){
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
              <Image source={ icone } style={styles.button}/>
          </TouchableOpacity>
      </TouchableOpacity>
      <Text style={styles.text}>
        Agendamento de Transferência Financeira
      </Text>
    </View>
  )
} 