import React, {useState} from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

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
      <Text>selected your date</Text>
      <TextInput mode="outlined" style={styles.inputs}>
        {date
          ? moment(date).format('DD/MM/YYYY', 'es-MX')
          : 'Fecha no seleccionada'}
      </TextInput>
      <Button
        label="start sesión"
        mode="contained"
        onPress={() => setShowDatePicker(true)}>
        dsadsa
      </Button>
      {showDatePicker && (
        <DateTimePicker
          //   testID="dateTimePicker"

          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
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
