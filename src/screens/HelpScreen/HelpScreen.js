import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HelpScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          color: '#000000',
          alignSelf: 'center',
        }}>
        Help
      </Text>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 15,

          marginTop: 10,
          color: '#000000',
          alignSelf: 'center',
        }}>
        What can we help you ?
      </Text>
      <TouchableOpacity style={{paddingVertical: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Robot-Medium',

              color: '#000000',
            }}>
            How to turn off notifications?
          </Text>
          <Icon name="chevron-right" size={22} style={{marginLeft: 140}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{paddingVertical: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Robot-Medium',

              color: '#000000',
            }}>
            How to delete your account?
          </Text>
          <Icon name="chevron-right" size={22} style={{marginLeft: 140}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    marginVertical: -40,
  },
});

export default HelpScreen;
