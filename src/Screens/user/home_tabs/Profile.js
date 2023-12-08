import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../common/Header';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const name = await AsyncStorage.getItem('NAME');
    const email = await AsyncStorage.getItem('EMAIL');
    const phone = await AsyncStorage.getItem('PHONE');
    setName(name);
    setEmail(email);
    setPhone(phone);
  };

  return (
    <LinearGradient
      colors={['#6a82fb', '#fc5c7d']}
      useAngle={true}
      angle={45}
      angleCenter={{x: 0.5, y: 0.5}}
      style={{height: '100%'}}>
      <View style={styles.container}>
        <Header title={'My Profile'} />
        <Image
          source={require('../../../images/user.png')}
          style={styles.profileImg}
        />
        <View style={styles.profileInfo}>
          <View style={styles.info}>
            <Text style={{color:'#fff'}}>User Name</Text>
            <Text style={styles.field}>{name}</Text>
          </View>
          <View style={styles.info}>
            <Text style={{color:'#fff'}}>Email Id</Text>
            <Text style={styles.field}>{email}</Text>
          </View>
          <View style={styles.info}>
            <Text style={{color:'#fff'}}>Contact no</Text>
            <Text style={styles.field}>{'+91' + phone}</Text>
          </View>
          <View style={styles.info}>
            <Text style={{color:'#fff'}}>Country</Text>
            <Text style={styles.field}>India</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImg: {
    height: 130,
    width: 130,
    alignSelf: 'center',
    marginTop: '30%',
  },
  profileInfo: {
    marginTop: 50,
    gap: 20,
    position: 'absolute',
    left: '30%',
    top: '36%',
  },
  info: {
    gap: 4,
  },
  field: {
    fontSize: 18,
    fontWeight: '500',
    color:'#fff',
  },
});
