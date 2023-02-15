import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import { date } from '@react-native-community/datetimepicker';

import styles from './styles';

import iconCalendar from '../../../../assets/calendar.png';
import iconClock from '../../../../assets/clock.png';

export default function({type}){
  const [datetime, setDateTime] = useState(new Date);

  return(
    <TouchableOpacity style={styles.input}>
      <DatePickerIOS 
        date={datetime}
        mode={type}
        minimumDate={new Date}
        onDateChange={setDateTime}
      />
      <Image 
      style={styles.iconTextInput} 
      source={type == 'date' ? iconCalendar : iconClock} />
    </TouchableOpacity>
  )
}