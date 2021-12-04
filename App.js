/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import AppStack from './src/navigation/AppStack';
import HomeStackNavigator from './src/navigation/HomeStackNavigator';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const onAuthStateChanged = async user => {
    console.log('user456', user);
    if (user) setCurrentUser(user);
    else setCurrentUser(null);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <NavigationContainer style={styles.root}>
      {currentUser ? <HomeStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#D1F4FA',
  },
});

export default App;
