import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
//navigation
import MainNavigation from './navigation/MainNavigation';
//RN paper
import {useMaterial3Theme} from '@pchmn/expo-material3-theme';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
//Theme
import {ThemeContex} from './context/ThemeContext';

const App = ({navigation}) => {
  const colorScheme = useColorScheme();
  const {theme} = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? {...MD3LightTheme, colors: theme.light}
      : {...MD3DarkTheme, colors: theme.dark};

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaView style={styles.appContainer}>
        <MainNavigation />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
