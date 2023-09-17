import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import LastAdd from '../screens/LastAdd';
import Porfile from '../screens/Porfile';
import Splash from '../screens/Splash';
import AddUser from '../screens/AddUser';
import AddFam from '../screens/AddFam';

const Stack = createNativeStackNavigator();
const MainNavigation = ({navigation}) => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function start() {
      try {
        await new Promise(resolve => {
          setTimeout(resolve, 5000);
        });
      } catch (e) {
        console.log(e);
      } finally {
        setAppIsReady(true);
      }
    }
    start();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {appIsReady ? (
          <Stack.Screen
            name="Loggin"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="splash "
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
        )} */}

        <Stack.Screen
          name="Last Adds"
          component={LastAdd}
          options={{
            headerBackVisible: false,
          }}
        />
        {/* <Stack.Screen name="Perfil" component={Porfile} /> */}
        {/* <Stack.Screen name="test" component={AddFamilyData} /> */}
        <Stack.Screen name="New patient" component={AddUser} />
        <Stack.Screen name="family" component={AddFam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
