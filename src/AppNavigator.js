import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import EditItem from './Screens/EditItem';
import SelectLogin from './Screens/user/SelectLogin';
import UserLogin from './Screens/user/UserLogin';
import UserSignup from './Screens/user/UserSignup';
import Home from './Screens/user/Home';
import Cart from './Screens/user/home_tabs/Cart';
import Checkout from './Screens/user/checkout/Checkout';
import Address from './Screens/user/checkout/Address';
import AddNewAddress from './Screens/user/checkout/AddNewAddress';
import OrderStatus from './Screens/user/checkout/OrderStatus';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Splash}
          name="Splash"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Dashboard}
          name="Dashboard"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={EditItem}
          name="EditItem"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SelectLogin}
          name="SelectLogin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserLogin}
          name="UserLogin"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={UserSignup}
          name="UserSignup"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Cart}
          name="Cart"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={Checkout}
          name="Checkout"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={Address}
          name="Address"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={AddNewAddress}
          name="AddNewAddress"
          options={{headerShown: true}}
        />
        <Stack.Screen
          component={OrderStatus}
          name="OrderStatus"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
