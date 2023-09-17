import React from 'react';
import {Button} from 'react-native-paper';


const ButtonCustom = ({label, mode, onPress,icon}) => {
  return (
    <Button mode="contained" onPress={onPress} icon={icon}>
      {label}
    </Button>
  );
};

export default ButtonCustom;
