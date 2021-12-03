import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomButton from '../../components/CustomButton';

const MainScreen = () => {
  const navigation = useNavigation();

  const onContinuePressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <CustomButton text="Let's Hydrated" onPress={onContinuePressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#D1F4FA',
    flex: 1,
  },
  logo: {
    width: '100%',
    maxWidth: 800,
    maxHeight: 600,
    alignItems: 'center',
  },
});

export default MainScreen;
