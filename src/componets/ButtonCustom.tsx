import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import React from 'react';

interface ButtonCustomProp {
  value?: string;
  label: string;
}
export default function ButtonCustomF({value, label}: ButtonCustomProp) {
  return (
    // <TouchableOpacity>
    //   <Text>{label}</Text>
    // </TouchableOpacity>
    <Button mode="contained">{label}</Button>
  );
}
