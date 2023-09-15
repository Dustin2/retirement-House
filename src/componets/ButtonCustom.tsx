import React from 'react';
import {Button} from 'react-native-paper';


const ButtonCustom = ({label, mode, onPress}) => {
  return (
    <Button mode="contained" onPress={onPress}>
      {label}
    </Button>
  );
};

export default ButtonCustom;
