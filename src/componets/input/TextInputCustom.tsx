import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

const TextInputCustom = ({label, mode, placeholder}) => {
  return <TextInput label={label} mode="outlined" placeholder={placeholder} />;
};

export default TextInputCustom;
