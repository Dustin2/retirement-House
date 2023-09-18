import {View, Text, StyleSheet, useColorScheme} from 'react-native';
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
const TextCustom = ({text, textColor}) => {
  const colorScheme = useColorScheme();

  const [selectedColor, setSelectedColor] = useState(textColor || 'black');

  // const toggleTheme = () => {
  //   setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  // };

  return (
    <View>
      <Text
        // style={
        //   colorScheme === 'dark'
        //     ? {
        //         // color: '#ffff',
        //         color: '#000000'
        //       }
        //     : {color: '#000000'}
        // }
        style={{color: textColor, margin: 6}}>
        {text}
      </Text>
    </View>
  );
};

export default TextCustom;

//create apk
// cd android &&./gradlew assembleRelease
