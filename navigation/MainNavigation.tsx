import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loggin from '../screens/Loggin';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* initialRouteName="Loggin" */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Loggin"
          component={Loggin}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
