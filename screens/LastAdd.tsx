import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Fab from '../src/componets/Fab/Fab';
const LastAdd = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Fab
        onPress={() => {
          navigation.navigate('New patient');
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LastAdd;
