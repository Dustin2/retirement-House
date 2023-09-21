import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//external componets
import DatePicker from '../src/componets/DatePicker';

//custom componets
import TextInput from '../src/componets/input/TextInputCustom';
import Text from '../src/componets/text/TextCustom';
import Button from '../src/componets/ButtonCustom';
import {AlertModal} from '../src/componets/AlertModal';

const AddUser = ({navigation}) => {
  const InitialState = {
    diseases: '',
    date: '',
    age: '',
    birthday: '',
    curp: '',
    name: '',
    lastName: '',
  };
  const [newUser, setNewUser] = useState(InitialState);

  //change text
  const handleChangeText = (name, value) => {
    setNewUser({...newUser, [name]: value});
    console.log(newUser);
  };

  const handleAlertAction = () => {
    // Implement your custom logic here when a button in the Alert is pressed.
    // This function can be passed as the onPress handler to the Alert component.
    console.log('Alert button pressed');
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <ScrollView>
          <Text
            text="Patient Info"
            textColor="gray"
            fontSize={25}
            styles={styles.tittle}
          />
          <View>
            <TextInput
              label="Name"
              // placeholder="insert your name"
              onChangeText={value => handleChangeText('name', value)}
            />
          </View>
          <TextInput
            label="Last name"
            placeholder="Insert your last name"
            onChangeText={value => handleChangeText('lastname', value)}
          />
          <DatePicker onPress={value => {}} />
          <TextInput
            label="Curp"
            placeholder="Insert your curp"
            mode="outlined"
            style={styles.inputs}
            keyboardType="default"
            onChangeText={value => handleChangeText('curp', value)}
          />
          <TextInput
            label="diseases"
            placeholder="Diabetic"
            style={styles.btnMultiLine}
            keyboardType="default"
            multiline
            onChangeText={value => handleChangeText('diseases', value)}
          />

          <Button
            label="save  family info"
            onPress={() => navigation.navigate('family')}
          />
        </ScrollView>
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
  btnMultiLine: {
    width: 'auto',
    height: 120,
    // margin: 6,
    fontSize: 17,
  },
  tittle: {
    textAlign: 'center',
  },
});
export default AddUser;
