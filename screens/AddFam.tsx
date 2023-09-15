import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DatePicker from '../src/componets/DatePicker';

const AddFam = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <Text>insert your name</Text>
        <TextInput
          label="Name"
          mode="outlined"
          style={styles.inputs}
          left={<TextInput.Icon icon="camera" />}
          // right={<TextInput.Icon icon="eye" />}
        />
        <Text>insert your Last name</Text>
        <TextInput
          label="Lastname"
          placeholder="dsadas"
          mode="outlined"
          style={styles.inputs}
        />
        <Text>insert your Age</Text>
        <TextInput
          label="Age"
          placeholder="dsadas"
          mode="outlined"
          style={styles.inputs}
          keyboardType="numeric"
        />
        <DatePicker />

        <Text>insert your name</Text>
        <TextInput
          label="Curp"
          placeholder="IDSADSA"
          mode="outlined"
          style={styles.inputs}
          keyboardType="default"
        />
        <Text>insert your name</Text>
        <TextInput
          label="Issues"
          placeholder="Diabetic"
          mode="outlined"
          style={styles.inputs}
          keyboardType="default"
          multiline
        />
      </SafeAreaView>
      <View style={styles.btnSend}>
        <Button
          mode="outlined"
          onPress={() => {
            navigation.navigate('family');
          }}>
          next page
        </Button>
      </View>
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
