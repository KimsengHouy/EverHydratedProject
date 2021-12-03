import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {signOut} from '../../utils/AuthProvider';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const RecommendedScreen = () => {
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
            padding: 10,
          }}>
          Stay Hydrated
        </Text>

        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5, fontWeight: 'bold'}}>
              Group
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,
                alignSelf: 'center',
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              Recommended Total Water Intake (per day)
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper1}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Infants (0-6 months old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              100 - 190 ml per kg bodyweight, from breastmilk
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper2}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Infants (6-12 months old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              800 mL - 1000 mL
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper2}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Childern (1-2 years old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              1100 mL - 1200 mL
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper2}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Childern (2-3 years old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              1300 mL
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper2}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Childern (4-8 years old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              1600 mL
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper2}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Girls (9-13 years old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              1900 mL
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper2}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Boys (9-13 years old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              2100 mL
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper3}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Adult women (older than 14 years old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              2000 mL
            </Title>
          </View>
        </View>
        <View style={styles.infoBoxWrapper3}>
          <View
            style={[
              styles.infoBox,
              {borderRightColor: '#21B6A8', borderRightWidth: 1},
            ]}>
            <Title style={{fontSize: 15, marginLeft: 5}}>
              Adult men (older than 14 years old)
            </Title>
          </View>

          <View style={styles.infoBox}>
            <Title
              style={{
                fontSize: 15,

                marginLeft: 5,
                justifyContent: 'center',
              }}>
              2500 mL
            </Title>
          </View>
        </View>
        <Text style={{justifyContent: 'center', marginLeft: 5}}>
          20-30% of the water we need comes from our food. Eating a balanced
          diet with a wide variety of fruit and vegetables can already help us
          stay hydrated.
        </Text>
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
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
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
    borderBottomColor: '#21B6A8',
    borderBottomWidth: 2,
    borderTopColor: '#21B6A8',
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 60,
  },
  infoBoxWrapper1: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBoxWrapper2: {
    borderBottomColor: '#21B6A8',
    borderBottomWidth: 1,
    borderTopColor: '#21B6A8',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 50,
  },
  infoBoxWrapper3: {
    borderBottomColor: '#21B6A8',
    borderBottomWidth: 1,
    borderTopColor: '#21B6A8',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 70,
  },
  infoBox: {
    width: '50%',

    justifyContent: 'space-evenly',
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

export default RecommendedScreen;
