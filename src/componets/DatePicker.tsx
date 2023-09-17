import React, {useState} from 'react';
//rn
import {View, StyleSheet, Platform} from 'react-native';
import {Button} from 'react-native-paper';
//external componets
import DateTimePicker from '@react-native-community/datetimepicker';
//managment date
import moment from 'moment';
//custom componets
import Text from '../componets/text/TextCustom';
import TextInput from './input/TextInputCustom';

const DatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Mostrar o DateTimePicker no iOS
    setDate(currentDate);
  };

  return (
    <View>
      <Text name=" birthdate" textColor="black" />
      <TextInput
        style={styles.inputs}
        disabled
        placeholder={
          date
            ? moment(date).format('DD/MM/YYYY', 'es-MX')
            : 'Fecha no seleccionada'
        }
      />

      <Button mode="contained" onPress={() => setShowDatePicker(true)}>
        Select your birthdate
      </Button>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <Text name=" Age" textColor="black" />
      <TextInput
        disabled={true}
        placeholder={moment(date, 'YYYYMMDD').fromNow()}
        // placeholder={diferenciaEnAnos}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
  },
  inputs: {
    margin: 10,
    fontSize: 17,
  },
});
export default DatePicker;
