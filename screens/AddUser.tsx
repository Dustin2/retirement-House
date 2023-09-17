import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import DatePicker from '../src/componets/DatePicker';
// import Icon from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import TextInput from '../src/componets/input/TextInputCustom';
import Text from '../src/componets/text/TextCustom';
import Button from '../src/componets/ButtonCustom';
const AddUser = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <ScrollView>
          <Text name="Name" textColor="black" />
          <TextInput label="insert your name" placeholder="insert your name" />
          <Text name="Last Name" textColor="black" />
          <TextInput label="last name" placeholder="insert your last name" />
          <DatePicker />
          <Text name="curp" textColor="black" />
          <TextInput
            label="Curp"
            placeholder="IDSADSA"
            mode="outlined"
            style={styles.inputs}
            keyboardType="default"
          />
          <Text name="Diseases" textColor="black" />
          <TextInput
            label="diseases"
            placeholder="Diabetic"
            style={styles.btnMultiLine}
            keyboardType="default"
            multiline
          />

          <Button label="dsds" onPress={() => console.log('ds')} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
git tag v0.1.0 abcdef12345

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 12,
  },
  inputs: {
    margin: 6,
    fontSize: 17,
  },
  btnSend: {
    alignContent: 'flex-end',
  },
  btnMultiLine: {
    width: 'auto',
    height: 120,
    // margin: 6,
    fontSize: 17,
  },
  // tittle: {},
});
export default AddUser;
