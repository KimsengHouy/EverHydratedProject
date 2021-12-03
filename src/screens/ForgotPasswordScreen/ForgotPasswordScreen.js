import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {ToastAndroid} from 'react-native';

import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [showLoading, setShowLoading] = useState(false);

  const reset = async () => {
    setShowLoading(true);
    try {
      await auth().sendPasswordResetEmail(email);
      setShowLoading(false);
      ToastAndroid.show(
        'Your reset password has sent to your email',
        ToastAndroid.SHORT,
      );
    } catch (e) {
      setShowLoading(false);
      Alert.alert(e.message);
    }
  };

  const {height} = useWindowDimensions();

  const navigation = useNavigation();

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
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />

        <CustomButton text="Send" onPress={() => reset()} />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
      {showLoading && (
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ForgotPasswordScreen;
