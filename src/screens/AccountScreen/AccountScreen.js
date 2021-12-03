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
const AccountScreen = () => {
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
        Account
      </Text>

      <TouchableOpacity style={{paddingVertical: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Robot-Medium',

              color: '#000000',
            }}>
            Personal Information
          </Text>
          <Icon name="chevron-right" size={22} style={{marginLeft: 210}} />
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
            Avatars
          </Text>
          <Icon name="chevron-right" size={22} style={{marginLeft: 300}} />
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
            Data Usage
          </Text>
          <Icon name="chevron-right" size={22} style={{marginLeft: 275}} />
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
            Recently Changed
          </Text>
          <Icon name="chevron-right" size={22} style={{marginLeft: 230}} />
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
});

export default AccountScreen;
