import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import AppStack from './AppStack';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingScreen from '../screens/SettingScreen';
import UserAddDetailsScreen from '../screens/UserAddDetailsScreen';
import InAboutScreen from '../screens/InAboutScreen';
import HelpScreen from '../screens/HelpScreen';
import SecurityScreen from '../screens/SecurityScreen';
import InNotiScreen from '../screens/InNotiScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={AppStack} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="UserDetails" component={UserAddDetailsScreen} />
      <Stack.Screen name="InAbout" component={InAboutScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Security" component={SecurityScreen} />
      <Stack.Screen name="NotiScreen" component={InNotiScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
