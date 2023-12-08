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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';

const UserLogin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState('false');

  const adminLogin = async () => {
    setModalVisible(true);
    firestore()
      .collection('users')
      .where('email', '==', email)
      .get()
      .then(querySnapshot => {
        setModalVisible(false)
        if (querySnapshot.docs[0]._data !== null) {
          if (
            querySnapshot.docs[0]._data.email == email &&
            querySnapshot.docs[0]._data.password == password
          ) {
            goToNextScreen(
              querySnapshot.docs[0]._data.userId,
              querySnapshot.docs[0]._data.phone,
              querySnapshot.docs[0]._data.name,
            );
           
          }
        }
        console.log(querySnapshot.docs[0]._data);
      })
      .catch(err => {
        setModalVisible(false);
        console.log(err);
        alert('Please Check Email/Password');
      });
  };

  const goToNextScreen = async (userId, phone, name) => {
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERId', userId);
    await AsyncStorage.setItem('PHONE', phone);
    await AsyncStorage.setItem('NAME', name);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
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
          if (email != '' && password != '') {
            adminLogin();
          } else {
            alert('Please enter email/password');
          }
        }}>
        <Text style={styles.loginTitle}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.createAcnt}
        onPress={() => navigation.navigate('UserSignup')}>
        Create New Account
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default UserLogin;

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
  createAcnt: {
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: 50,
  },
});
