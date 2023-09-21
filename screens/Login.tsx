import React, {useRef} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import {
//   // Button,
//   ActivityIndicator,
//   MD2Colors,
//   TextInput,
// } from 'react-native-paper';

//componets
import Text from '../src/componets/text/TextCustom';
import Button from '../src/componets/ButtonCustom';
import TextInput from '../src/componets/input/TextInputCustom';

const Login = ({navigation}) => {
  const email = useRef(null);
  const password = useRef(null);

  const handleTextInputSubmit = () => {};
  return (
    <View style={styles.mainBody}>
      <Text text="welcome" fontSize={35} textColor={{}} />
      <View style={styles.subView}>
        <KeyboardAvoidingView>
          <View style={styles.SectionStyle}>
            <TextInput
              label="email"
              placeholder="example@gmail.com"
              keyboardType="email-address"
              // underlineColor="#E3B23C"
              activeOutlineColor="#E3B23C"
              style={styles.inputs}
              theme="ligth"
            />
            <Text style={styles.subTitle}>Insert your password</Text>
            <TextInput
              label="password"
              secureTextEntry
              activeOutlineColor="#E3B23C"
              style={styles.inputs}
            />
            <TouchableOpacity style={styles.sectionBtn}>
              <Button
                label="start sesión"
                mode="contained"
                onPress={() => {
                  navigation.navigate('Last Adds');
                }}
              />
            </TouchableOpacity>
          
          </View>

          <TouchableOpacity>
            <Text
              text="Don't have account? Register"
              textColor="#000000"
              styles={styles.title}
            />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: '#E3B23C',
    height: 700,
  },
  SectionStyle: {
    margin: 12,
    paddingTop: 22,
  },
  sectionBtn: {
    margin: 12,
    // marginVertical: 20,
  },
  inputs: {
    margin: 12,
  },
  title: {
    fontSize: 60,
  },
  subView: {
    backgroundColor: '#ffff',
    height: 430,
    marginTop: 250,
    borderRadius: 40,
    // borderTopLeftRadius: 40,
  },
});
