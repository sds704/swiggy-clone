import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 3000);
  }, []);

  const checkLogin = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== null) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('SelectLogin');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>FoodApp</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'red',
    fontWeight: '800',
    fontSize: 30,
  },
});
