import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Switch,
} from 'react-native';

import Logo from '../../../assets/images/logo1.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InNotiScreen = () => {
  const [switchValue, setswitchValue] = useState(false);

  const toggleSwitch = value => [setswitchValue(value)];
  const {height} = useWindowDimensions();
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
          Notifications
        </Text>
        <View
          style={{padding: 20, borderTopWidth: 1, borderTopColor: '#CCCCCC'}}>
          <Text style={{color: '#000000', fontSize: 15, fontWeight: 'bold'}}>
            Push Notifications
          </Text>
          <TouchableOpacity style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                {switchValue
                  ? 'Pause All Notification is ON'
                  : 'Pause All Notification is OFF'}
              </Text>
              <Switch
                style={{marginLeft: 125}}
                onValueChange={toggleSwitch}
                value={switchValue}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                From Ever Tech
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 226}} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#CCCCCC'}}>
        <Text style={{color: '#000000', fontSize: 15, fontWeight: 'bold'}}>
          Other Notification Types
        </Text>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Robot-Medium',
                marginLeft: 10,
                color: '#000000',
              }}>
              Email and SMS
            </Text>
            <Icon name="chevron-right" size={22} style={{marginLeft: 231}} />
          </View>
        </TouchableOpacity>
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

export default InNotiScreen;
