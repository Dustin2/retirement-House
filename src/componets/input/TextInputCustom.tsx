import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
// import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const TextInputCustom = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  disabled,
  style,
  multiline,
}) => (
  <TextInput
    style={{...style, backgroundColor: 'transparent', margin: 10}}
    mode="outlined"
    keyboardType={keyboardType || 'default'}
    label={label}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    disabled={disabled}
    multiline={multiline}
  />
);

export default TextInputCustom;
