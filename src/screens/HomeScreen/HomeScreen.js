import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Button,
  TouchableOpacity,
  ScrollView,
  Animated,
  SafeAreaView,
} from 'react-native';
import Logo from '../../../assets/images/logo1.png';
import Banner from '../../../assets/images/new2.jpg';
import Water from '../../../assets/images/water-bottle.png';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import WaterOption from '../../components/WaterOption';
import ConfettiCannon from 'react-native-confetti-cannon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AddRemoveButton} from '../../components/AddRemoveButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {mLToCups} from '../../utils/convertion';
import {getUser} from '../../utils/database';
import {updateUser} from '../../utils/database';

const amounts = [250, 500, 1000, 1500];

// Async Storage
const storeData = async (value, key = '@amount') => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key, setValue) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      setValue(Number(value));
    }
  } catch (e) {
    // error reading value
    console.log(e);
  }
};

const renderConfetti = () => {
  return <ConfettiCannon count={100} origin={{x: 0, y: 0}} fadeOut={true} />;
};

const HomeScreen = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [waterGoal, setWaterGoal] = useState(3000);
  const [waterDrank, setWaterDrank] = useState(0);
  const {height} = useWindowDimensions();

  const [fillingPercentage, setFillingPercentage] = useState(0);

  const [isGoalAchieved, setIsGoalAchieved] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const setUser = async () => {
    console.log('setuser');
    const userSnapshot = await getUser();
    console.log('usersnap', userSnapshot);
    if (userSnapshot.exists) {
      console.log('User Data', userSnapshot.data());
      console.log('userdata2', userData);
      await setUserData(userSnapshot.data());
      console.log('userdata3', userData);
      console.log('watergoal', userSnapshot.get('waterGoal'));
      setWaterGoal(
        userSnapshot.get('waterGoal') ? userSnapshot.get('waterGoal') : 3000,
      );

      setWaterDrank(
        userSnapshot.get('waterDrank') ? userSnapshot.get('waterDrank') : 0,
      );
    }
  };

  useEffect(() => {
    setUser();

    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const navigation = useNavigation();

  const Dashboard = () => {
    console.warn('Dashboard is clicked');
  };

  const onLogoutPressed = () => {
    console.warn('Logout');
  };

  const updatewaterGoal = () => {};

  // Progress Bar Animation
  const barHeight = useRef(new Animated.Value(0)).current;
  const progressPercent = barHeight.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', `100%`],
  });

  useEffect(() => {
    getData('@amount', setWaterDrank);
    getData('@goal', setWaterGoal);
  }, []);

  useEffect(() => {
    Animated.timing(barHeight, {
      duration: 1000,
      toValue: fillingPercentage / 3,
      useNativeDriver: false,
    }).start();
  }, [fillingPercentage]);

  // End of Progress Bar Animation

  useEffect(() => {
    storeData(waterGoal.toString(), '@goal');
  }, [waterGoal]);

  useEffect(() => {
    storeData(waterDrank.toString(), '@amount');
  }, [waterDrank]);

  useEffect(() => {
    // percentage = waterDrank * 100 / waterGoal
    let percentage = (waterDrank * 100) / waterGoal;
    let fillingP = (percentage * 300) / 100;
    setFillingPercentage(fillingP > 300 ? 300 : fillingP);
  }, [waterGoal, setFillingPercentage, waterDrank]);

  useEffect(() => {
    if (waterDrank >= waterGoal && isGoalAchieved === false) {
      setIsGoalAchieved(true);
    }
    if (waterDrank < waterGoal && isGoalAchieved === true) {
      setIsGoalAchieved(false);
    }

    if (showConfetti === false && isGoalAchieved === true) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [waterDrank, isGoalAchieved, waterGoal]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 25,
            alignSelf: 'center',
            color: 'black',
            marginTop: -40,
          }}>
          Welcome
        </Text>
        <Text style={{fontSize: 13, alignSelf: 'center', color: '#21B6A8'}}>
          Thousands Have Lived Without Love, Not One Without Water.
        </Text>
        {showConfetti && renderConfetti()}
        {/* Water Goal */}
        <View style={styles.waterGoalContainer}>
          <Text style={[styles.blueText, {fontSize: 20}]}>
            {' '}
            {userData ? userData.fullname : ''} 's Hydrated Goal
          </Text>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text style={[styles.grayText, {fontSize: 26}]}>
              {mLToCups(waterGoal, userData.unit)}{' '}
              {userData ? userData.unit : 'mL'}{' '}
            </Text>
            {/* Add Goal */}
            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => {
                const updateValue = waterGoal + 250;
                setWaterGoal(updateValue);
                console.log(updateValue, '123value');
                updateUser({waterGoal: updateValue});
              }}>
              <Ionicons name="add-circle" size={26} color="#21B6A8" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{padding: 5}}
              onPress={() => {
                const updateValue = waterGoal - 250;
                setWaterGoal(updateValue);
                console.log(updateValue, '1234value');
                updateUser({waterGoal: updateValue});
              }}>
              <Ionicons name="remove-circle" size={26} color="#FF0000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ProgressView */}

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-around',
          }}>
          {/* Water You've Drunk Label */}
          <View style={{justifyContent: 'center'}}>
            <Text style={[styles.grayText, {fontSize: 28}]}>You've drunk</Text>
            <Text style={[styles.blueText, {fontSize: 42}]}>
              {mLToCups(waterDrank, userData.unit)}{' '}
              {userData ? userData.unit : 'mL'}{' '}
            </Text>
            <Text style={[styles.grayText, {fontSize: 28}]}>
              of water today.
            </Text>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBarContainer}>
            <Animated.View
              style={{
                height: progressPercent,
                backgroundColor: '#21B6A8',
                borderRadius: 40,
              }}
            />
          </View>
        </View>

        {/* Add Water */}
        <View style={styles.waterButtonsContainer}>
          {amounts.map(amount => {
            return (
              <AddRemoveButton
                key={'add' + amount}
                amount={amount}
                value={waterDrank}
                setValue={setWaterDrank}
                unitType={userData.unit}
                operation="add"
              />
            );
          })}
        </View>

        {/* Remove Water */}
        <View style={styles.waterButtonsContainer}>
          {amounts.map(amount => {
            return (
              <AddRemoveButton
                key={'remove' + amount}
                amount={amount}
                value={waterDrank}
                setValue={setWaterDrank}
                unitType={userData.unit}
                operation="remove"
              />
            );
          })}
        </View>
        <View
          style={{
            paddingVertical: 20,
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
          }}></View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  progressBarContainer: {
    borderRadius: 20,
    borderWidth: 1,
    width: 40,
    height: 300,
    justifyContent: 'flex-end',
    borderColor: '#21B6A8',
  },
  waterButtonsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    width: '90%',
    justifyContent: 'space-between',
  },
  waterGoalContainer: {
    padding: 50,
    alignItems: 'center',
  },
  blueText: {
    color: '#21B6A8',
    fontWeight: '600',
  },
  grayText: {color: '#323033', fontWeight: '600'},
  notificationButton: {
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 7,
  },

  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default HomeScreen;
