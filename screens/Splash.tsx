import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Animated,
  StatusBar,
} from 'react-native';

//logo
import Logo from '../src/assets/pension.png';

const Splash = () => {
  //animation values
  const startAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //started animation in 500ms
    setTimeout(() => {
      //sequence  Animation
      Animated.sequence([
        Animated.timing(startAnimation, {
          toValue: 100,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="#8C7B86" />
      <Animated.View style={styles.animatedContainer}>
        <Image source={Logo} style={styles.imageContainer} />
        <Text style={styles.title}>Paradise House</Text>
      </Animated.View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#80727B',
    flex: 1,
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginBottom: 12,
  },
  animatedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // transform:[
    //   {
    //     translateY:startA
    //   }
    // ]
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Splash;
