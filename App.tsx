import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
//navigation
import MainNavigation from './navigation/MainNavigation';
import {PaperProvider} from 'react-native-paper';

const App = ({navigation}) => {
  return (
    <PaperProvider>
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
