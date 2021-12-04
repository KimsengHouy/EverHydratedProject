import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {signUp} from '../../utils/AuthProvider';
import AddProfileScreen from '../AddProfileScreen';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onSignUpPressed = async () => {
    if (email != '' && password != '' && confrimPassword != '') {
      if (password == confrimPassword) {
        await signUp(email, password, fullname, age);
      } else {
        Alert.alert('password did not match');
      }
    }
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Terms of Use');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy Policy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Text style={styles.title}>Sign Up</Text>
        <CustomInput
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Enter your full name"
          value={fullname}
          setValue={setFullname}
        />

        <CustomInput
          placeholder="Enter your age"
          value={age}
          setValue={setAge}
          keyboardType="numeric"
        />

        <CustomInput
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Enter your confirm password"
          value={confrimPassword}
          setValue={setConfrimPassword}
          secureTextEntry
        />

        <CustomButton text="Sign Up" onPress={onSignUpPressed} />
        <Text style={styles.text}>
          By Sign Up, you confrim that you accept our {''}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />

        <CustomButton
          text="Have an account? SIGN IN"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
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

export default SignUpScreen;
