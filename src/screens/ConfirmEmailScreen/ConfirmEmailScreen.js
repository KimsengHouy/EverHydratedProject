import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('HomeScreen');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onResendCodePressed = () => {
    console.warn('Resend code');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#D1F4FA',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 5,
    width: '80%',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#051C60',
  },
});

export default ConfirmEmailScreen;
