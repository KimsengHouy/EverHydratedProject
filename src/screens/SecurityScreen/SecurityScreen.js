import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SecurityScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
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
          Security
        </Text>
        <View
          style={{padding: 20, borderTopWidth: 1, borderTopColor: '#CCCCCC'}}>
          <Text style={{color: '#000000', fontSize: 15, fontWeight: 'bold'}}>
            Login Security
          </Text>
          <TouchableOpacity style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="key-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Password
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 250}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="map-marker-radius-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Login Activity
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 226}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="shield-lock-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Two-Factor Authentication
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 138}} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingVertical: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="shield-check-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Robot-Medium',
                  marginLeft: 10,
                  color: '#000000',
                }}>
                Security Checkup
              </Text>
              <Icon name="chevron-right" size={22} style={{marginLeft: 200}} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#CCCCCC'}}>
        <Text style={{color: '#000000', fontSize: 15, fontWeight: 'bold'}}>
          Data and History
        </Text>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="podium-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Robot-Medium',
                marginLeft: 10,
                color: '#000000',
              }}>
              Access Data
            </Text>
            <Icon name="chevron-right" size={22} style={{marginLeft: 231}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="download-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Robot-Medium',
                marginLeft: 10,
                color: '#000000',
              }}>
              Download Data
            </Text>
            <Icon name="chevron-right" size={22} style={{marginLeft: 214}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="delete-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Robot-Medium',
                marginLeft: 10,
                color: '#000000',
              }}>
              Clear History
            </Text>
            <Icon name="chevron-right" size={22} style={{marginLeft: 229}} />
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

export default SecurityScreen;
