import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';


const Fab = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.fab}>
      <FAB icon="plus" onPress={onPress} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default Fab;
