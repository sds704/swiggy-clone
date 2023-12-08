import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const SelectLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Select Login Type</Text>
     <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate('Login')
     }}>
        <Text style={styles.btnText}>Admin Login</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn} onPress={()=>{
        navigation.navigate('UserLogin')
     }}>
        <Text style={styles.btnText}>User Login</Text>
     </TouchableOpacity>
    </View>
  )
}

export default SelectLogin

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        fontWeight:'700'
    },
    btn:{
        borderRadius:10,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:'90%',
        marginTop:30,
    },
    btnText:{
        fontWeight:'600',
        fontSize:18,
        color:'#fff',
    }
})