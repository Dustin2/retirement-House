import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  // Button,
  ActivityIndicator,
  MD2Colors,
  TextInput,
  Text,
} from 'react-native-paper';

//componets
import TextInputCustom from '../src/componets/input/TextInputCustom';
import Button from '../src/componets/ButtonCustom';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.mainBody}>
      <KeyboardAvoidingView enabled>
        <View style={styles.SectionStyle}>
          <Text style={styles.subTitle}>Insert your email</Text>
          <TextInput
            mode="outlined"
            label="email"
            placeholder="example@gmail.com"
            keyboardType="email-address"
            error={false}
            underlineColor="blue"
            style={styles.inputs}
            theme="ligth"
          />
          <Text style={styles.subTitle}>Insert your password</Text>
          <TextInput
            mode="outlined"
            label="password"
            placeholder=""
            secureTextEntry
            error={false}
            underlineColor="gray"
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
          <Text style={styles.text}>Don't have account? </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Register </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  SectionStyle: {
    margin: 12,
    // marginVertical: 20,
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
  subTitle: {
    fontSize: 15,
    color: 'gray',
  },
  text: {
    color: 'red',
  },
});
