import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const lightTheme = {
  textColor: 'black',
};

const darkTheme = {
  textColor: 'white',
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
const TextCustom = ({name, textColor}) => {
  const [selectedColor, setSelectedColor] = useState(textColor);

  // const toggleTheme = () => {
  //   setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  // };

  return (
    <View>
      <Text style={{color: textColor, margin: 61}}>{name}</Text>
    </View>
  );
};

export default TextCustom;
