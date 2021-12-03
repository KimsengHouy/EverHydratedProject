import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {signOut} from '../../utils/AuthProvider';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();

  const InAboutScreen = () => {
    navigation.navigate('InAbout');
  };

  const HelpScreen = () => {
    navigation.navigate('Help');
  };

  const SecurityScreen = () => {
    navigation.navigate('Security');
  };

  const InNotiScreen = () => {
    navigation.navigate('NotiScreen');
  };

  const AccountScreen = () => {
    navigation.navigate('AccountScreen');
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
            color: '#000000',
            alignSelf: 'center',
            padding: 20,
          }}>
          Settings
        </Text>
        <View
          style={{padding: 20, borderTopWidth: 1, borderTopColor: '#CCCCCC'}}>
          <TouchableOpacity
            style={{paddingVertical: 15}}
            onPress={InNotiScreen}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="notifications-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Notification
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 225}} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderTopColor: '#CCCCCC',
          }}>
          <TouchableOpacity
            style={{paddingVertical: 15}}
            onPress={SecurityScreen}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="shield-checkmark-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Security
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 248}} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderTopColor: '#CCCCCC',
          }}>
          <TouchableOpacity
            style={{paddingVertical: 15}}
            onPress={AccountScreen}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="account-circle-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Account
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 245}} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderTopColor: '#CCCCCC',
          }}>
          <TouchableOpacity style={{paddingVertical: 15}} onPress={HelpScreen}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="help-buoy" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Help
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 270}} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderTopColor: '#CCCCCC',
          }}>
          <TouchableOpacity
            style={{paddingVertical: 15}}
            onPress={InAboutScreen}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="information-circle-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                About
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 260}} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderTopColor: '#CCCCCC',
          }}>
          <Text style={{marginLeft: 10, color: '#000000', fontSize: 20}}>
            Logins
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                color: '#21B6A8',
                fontSize: 15,
                marginTop: 30,
              }}>
              Add Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signOut}>
            <Text
              style={{
                marginLeft: 10,
                color: '#FF0000',
                fontSize: 15,
                marginTop: 30,
              }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default SettingScreen;
