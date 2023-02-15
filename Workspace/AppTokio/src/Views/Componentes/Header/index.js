import React from 'react';
import { Alert, Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

// ICONES
import logo from '../../../../assets/logo.png';
import notification from '../../../../assets/notification.png';

 
export default function Header({ showNotification, showBack, pressNotification, late, navigation }){
  
  function Notificacao() {
      Alert.alert('Tókio Marine Seguradora');
  }

  return(
      <View style={styles.header}>

          <View style={styles.nome}>
              <Text style={styles.nome}>ATF</Text>
          </View>

          <TouchableOpacity style={styles.notification} activeOpacity = { .5 } onPress={Notificacao}>
               <Image source={notification} style={styles.notification}></Image>
          </TouchableOpacity>

          <Image source={logo} style={styles.logo}></Image>

          <TouchableOpacity style={styles.notification} activeOpacity = { .5 } onPress={Notificacao}>
               <Image source={notification} style={styles.notification}></Image>
          </TouchableOpacity>
              
      </View>
  )
}