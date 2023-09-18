import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import DatePicker from '../src/componets/DatePicker';
import Text from '../src/componets/text/TextCustom';
import TextInput from '../src/componets/input/TextInputCustom';

const AddFam = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Text text='name' textColor='black'/>
      </SafeAreaView>
    </View>
  );
};

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
});
export default AddFam;
