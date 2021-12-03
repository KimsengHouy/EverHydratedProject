import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import {SafeAreaView} from 'react-native-safe-area-context';
import UserUI from '../../../assets/images/userui.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import Share from 'react-native-share';
import auth from '@react-native-firebase/auth';
import {getUserDetails} from '../../utils/database';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(true);
  const getUser = async () => {
    const User = await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const myCustomShare = async () => {
    const shareOptions = {
      message: 'This is Hydrated Test Share',
    };
    try {
      const ShareReponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareReponse));
    } catch (error) {
      console.log('Error =>', error);
    }
  };
  const navigation = useNavigation();
  const EditProfileScreen = () => {
    navigation.navigate('EditProfile');
  };
  const SettingScreen = () => {
    navigation.navigate('SettingScreen');
  };
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Avatar.Image
            source={{
              uri: userData
                ? userData.userImg ||
                  'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
            }}
            size={80}
            marginTop={20}
          />
          <View>
            <Title
              style={[
                styles.title,
                {marginTop: 30, marginBottom: 5, marginLeft: 10},
              ]}>
              {userData ? userData.fullname : ''}
            </Title>
            <Caption style={[styles.caption, {marginLeft: 10}]}>
              {userData ? userData.taguser : ''}
            </Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="cake" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            {userData ? userData.age : ''}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            {userData ? userData.country : ''}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            {userData ? userData.phone : ''}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            {auth().currentUser.email}
          </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#dddddd', borderRightWidth: 1},
          ]}>
          <Title>{userData ? userData.unit : ''}</Title>
          <Caption>Unit</Caption>
        </View>
        <View
          style={[
            styles.infoBox,
            {borderRightColor: '#dddddd', borderRightWidth: 1},
          ]}>
          <Title>{userData ? userData.climate : ''}</Title>
          <Caption>Climate</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>{userData ? userData.activetime : ''}</Title>
          <Caption>Active Time</Caption>
        </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={EditProfileScreen}>
          <View style={styles.menuItem}>
            <Icon name="account-edit-outline" color="#21B6A8" size={25} />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={myCustomShare}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#21B6A8" size={25} />
            <Text style={styles.menuItemText}>Tell your friend</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#21B6A8" size={25} />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={SettingScreen}>
          <View style={styles.menuItem}>
            <Icon name="settings-helper" color="#21B6A8" size={25} />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
