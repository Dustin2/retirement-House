import {TextInput} from 'react-native-paper';
import React from 'react';

interface TextInputCustomProps {
  onPress?: () => void;
  label: string;
  value?: string;
  icon?: '';
  mode?: string;
}
export default function TextInputCustom({
  label,
  value,
  icon,
  mode,
}: TextInputCustomProps) {
  return <TextInput label={label} value={value} mode="outlined" />;
}
