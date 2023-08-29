import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Porfile from './Porfile';
import Settings from './Settings';

const Tabs = createMaterialTopTabNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="porfile" component={Porfile} />
      <Tabs.Screen name="settigs" component={Settings} />
      {/* <Tabs.Screen name="porfile" component={Porfile} /> */}
    </Tabs.Navigator>
    // <SafeAreaView>
    //   <View>
    //     <Text style={{color: 'black'}}>HomeScreen</Text>
    //     <TouchableOpacity onPress={() => navigation.navigate('Loggin')}>
    //       <Text style={{color: 'black'}}>close session</Text>
    //     </TouchableOpacity>
    //   </View>
    // </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
