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
import Loader from '../common/Loader';
import uuid from 'react-native-uuid'
import Asyncstorage from '@react-native-async-storage/async-storage'

const UserSignup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const saveUser = () => {
    setModalVisible(true);
    const userId = uuid.v4();
    firestore()
      .collection('users')
      .doc(userId)
      .set({
        name: name,
        email: email,
        password: password,
        phone: phone,
        userId: userId,
        cart: [],
      })
      .then(res => {
        setModalVisible(false);
        navigation.goBack();
      })
      .catch(error => {
        setModalVisible(false);
        console.log(error);
      });
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder={'Enter Your Name'}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Enter Your Email Id'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Enter Your Phone no'}
        value={phone}
        keyboardType={'number-pad'}
        onChangeText={text => setPhone(text)}
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
          if (email != '' && password != '' && name !='' && phone !='' && phone.length > 9) {
            saveUser();
          } else {
            alert('Please Enter Data');
          }
          
        }}>
        <Text style={styles.loginTitle}>Sign Up</Text>
      </TouchableOpacity>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default UserSignup;

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
