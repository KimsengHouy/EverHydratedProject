import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLegend,
  VictoryLine,
} from 'victory-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/core';

const DailyScreen = () => {
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [waterGoal, setWaterGoal] = useState('');
  const [waterDrunk, setWaterDrunk] = useState('');

  const data = {
    goal: [{x: 'Goal', y: userData.waterGoal ? userData.waterGoal : ''}],
    drunk: [{x: 'Drunk', y: userData.waterDrank ? userData.waterDrank : ''}],
  };

  const saveUserReport = async () => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        waterGoalArray: [
          {
            waterGoal: userData.waterGoal ? userData.waterGoal : '',
            createdAt: firestore.Timestamp.fromDate(new Date()),
          },
        ],
        waterDrunkArray: [
          {
            waterDrunk: userData.waterDrank ? userData.waterDrank : '',
            createdAt: firestore.Timestamp.fromDate(new Date()),
          },
        ],
      });
  };
  const navigation = useNavigation();

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
          Daily Report
        </Text>
      </View>
      <View>
        <VictoryChart>
          <VictoryAxis />
          <VictoryAxis dependentAxis />

          <VictoryGroup offset={20}>
            <VictoryBar
              animate={{
                duration: 2000,
                onLoad: {duration: 1000},
              }}
              data={data.drunk}
              labels={({datum}) => `${datum._y}`}
              style={{data: {fill: '#21B6A8'}}}
            />
            <VictoryBar
              animate={{
                duration: 2000,
                onLoad: {duration: 1000},
              }}
              data={data.goal}
              labels={({datum}) => `${datum._y}`}
              style={{data: {fill: 'blue'}}}
            />
          </VictoryGroup>
          <VictoryLegend
            x={Dimensions.get('screen').width / 2 - 120}
            orientation="horizontal"
            gutter={30}
            data={[
              {name: 'Drunk Amount', symbol: {fill: '#21B6A8'}},
              {name: 'Goaled Amount', symbol: {fill: 'blue'}},
            ]}
          />
        </VictoryChart>
      </View>
      {/* <View style={{alignItems: 'center', padding: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
            color: '#000000',
            alignSelf: 'center',
            padding: 20,
          }}>
          Compare your daily hydrated
        </Text>

        <CustomButton text="Compare" onPress={saveUserReport} />
      </View> */}
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

export default DailyScreen;
