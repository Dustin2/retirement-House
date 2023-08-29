import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import ButtonCustom from '../src/componets/ButtonCustom';
import {Button} from 'react-native-paper';
import TextInputCustom from '../src/componets/input/TextInputCustom';
import HomeScreen from './HomeScreen';

const Loggin = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.logginContainer} behavior="position">
      <SafeAreaView>
        <Text style={styles.title}>Hi, Welcome!</Text>
        <Text style={styles.subTitle}>Insert your Email</Text>
        <TextInputCustom label="examenple@gmail.com" />
        <Text style={styles.subTitle}>Insert your Password</Text>
        <TextInputCustom label="********" />
        <View style={styles.btn}></View>
        {/* <ButtonCustom
          // label="loggin"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          dsadsa
        </ButtonCustom> */}
        <Button
          mode="outlined"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          dsads
        </Button>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Loggin;

const styles = StyleSheet.create({
  logginContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    marginTop: 318,
  },
  title: {
    fontSize: 30,
    color: 'gray',
    fontWeight: 'bold',
  },
  btn: {
    margin: 20,
  },
  subTitle: {
    color: 'gray',
    fontSize: 20,
    margin: 6,
  },
});
