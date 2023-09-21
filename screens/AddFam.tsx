import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
// import {Button} from 'react-native-paper';
import DatePicker from '../src/componets/DatePicker';
import Text from '../src/componets/text/TextCustom';
import TextInput from '../src/componets/input/TextInputCustom';
import Button from '../src/componets/ButtonCustom';

const AddFam = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Text
          text="Family member Info"
          textColor="gray"
          fontSize={25}
          styles={styles.title}
        />
        <TextInput label="" placeholder="insert your name" />

        <TextInput label="" placeholder="insert your name" />

        <TextInput
          label=""
          placeholder="insert your Phone Number"
          keyboardType="numeric"
        />

        <TextInput label="" placeholder="insert your name" />

        <TextInput label="" placeholder="+33 312321" />
        <Button label='Save Info' onPress={()=>{}} />
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
  title: {
    textAlign: 'center',
  },
});
export default AddFam;
