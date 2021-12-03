import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import {Input} from 'react-native-elements/dist/input/Input';
import Logo from '../../../assets/images/logo1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {adduserDetails} from '../../utils/database';
import {NavigationContainer} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';

const UserAddDetailsScreen = () => {
  const navigation = useNavigation();
  const [fullname, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('');
  const [climate, setClimate] = useState('');
  const [unit, setUnit] = useState('');
  const [activetime, setActiveTime] = useState('');

  const hydratedUser = async () => {
    const currentUserId = Math.floor(100000 + Math.random() * 9000).toString();
    await adduserDetails(
      currentUserId,
      fullname,
      age,
      mobile,
      country,
      climate,
      unit,
      activetime,
    );

    navigation.navigate('HomeScreen', {
      currentUserId: currentUserId,
      currentFullName: fullname,
    });

    setFullName('');
    setAge('');
    setMobile('');
    setCountry('');
    setClimate('');
    setUnit('');
    setActiveTime('');
    ToastAndroid.show('User details has been saved', ToastAndroid.SHORT);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>Please kindly add your details</Text>
        <Input
          placeholder="Enter your full name"
          value={fullname}
          onChangeText={val => setFullName(val)}
        />
        <Input
          placeholder="Enter your age"
          value={age}
          onChangeText={val => setAge(val)}
        />
        <Input
          placeholder="Enter your mobile number"
          value={mobile}
          onChangeText={val => setMobile(val)}
        />
        <Input
          placeholder="Enter your country"
          value={country}
          onChangeText={val => setCountry(val)}
        />
        <Input
          placeholder="Enter your current climate"
          value={climate}
          onChangeText={val => setClimate(val)}
        />
        <Input
          placeholder="Unit Measurment (Mectric/Imperial)"
          value={unit}
          onChangeText={val => setUnit(val)}
        />
        <Input
          placeholder="Enter your free active time"
          value={activetime}
          onChangeText={val => setActiveTime(val)}
        />
        <CustomButton text="Hydrated Now" onPress={hydratedUser} />
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

export default UserAddDetailsScreen;
