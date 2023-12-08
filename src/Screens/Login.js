import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminLogin = async () => {
    const users = await firestore().collection('admin').get();
    console.log(users.docs[0]._data.email + '  ' + email);
    console.log(users.docs[0]._data.password + '  ' + password);
    navigation.navigate('Dashboard');
    // if (
    //   email === users.docs[0]._data.email  &&  password === users.docs[0]._data.password
    // ) {
    //   await AsyncStorage.setItem('EMAIL', email);
    //   navigation.navigate('Dashboard');
    // } else {
    //   alert('Wrong email/password');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      <TextInput
        style={styles.input}
        placeholder={'Enter Your Email Id'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Enter Your Password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          if (email !== '' && password !== '') {
            adminLogin();
          } else {
            alert('Please enter email/password');
          }
        }}>
        <Text style={styles.loginTitle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'center',
    color: '#000',
    marginTop: 100,
  },
  input: {
    paddingLeft: 20,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    width: '90%',
  },
  loginBtn: {
    backgroundColor: 'orange',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTitle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 18,
  },
});
