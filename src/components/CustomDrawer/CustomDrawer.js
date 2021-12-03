import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import {signOut} from '../../utils/AuthProvider';
import UserAddDetailsScreen from '../../screens/UserAddDetailsScreen';

import Share from 'react-native-share';

const CustomDrawer = props => {
  const myCustomShare = async () => {
    const shareOptions = {
      message: 'Share to my friends',
    };
    try {
      const ShareReponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareReponse));
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#40E0D0'}}>
        <ImageBackground
          source={require('../../../assets/images/menu.jpg')}
          style={{padding: 10}}>
          <Image
            source={require('../../../assets/images/logo1.png')}
            style={{
              height: 100,
              width: 200,
              borderRadius: 40,
              marginBottom: 20,
            }}
          />
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#CCCCCC'}}>
        <TouchableOpacity onPress={myCustomShare} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Robot-Medium',
                marginLeft: 5,
                color: '#000000',
              }}>
              Share to Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={signOut} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Robot-Medium',
                marginLeft: 5,
                color: '#000000',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomDrawer;
