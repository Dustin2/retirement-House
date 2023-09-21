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
  underlineColor,
  secureTextEntry,
  onFocus,
  activeOutlineColor
}) => (
  <TextInput
    style={{...style, backgroundColor: 'transparent', margin: 8}}
    mode="outlined"
    keyboardType={keyboardType || 'default'}
    label={label}
    value={value}
    underlineColor={underlineColor}
    onChangeText={onChangeText}
    placeholder={placeholder}
    disabled={disabled}
    multiline={multiline}
    secureTextEntry={secureTextEntry}
    onFocus={onFocus}
    activeOutlineColor={activeOutlineColor}
  />
);

export default TextInputCustom;
