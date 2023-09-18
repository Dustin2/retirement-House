// Alert.js
import React from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';

const Alert = ({ visible, title, message, onClose, buttons }) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
          <Text>{message}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20 }}>
            {buttons.map((button, index) => (
              <TouchableOpacity key={index} onPress={button.onPress} style={{ marginLeft: 10 }}>
                <Text style={{ color: 'blue', fontSize: 16 }}>{button.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
