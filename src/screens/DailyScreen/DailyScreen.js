import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryAxis,
} from 'victory-native';
import {useNavigation} from '@react-navigation/core';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {mLToCups} from '../../utils/convertion';
import {getUser} from '../../utils/database';
import {updateUser} from '../../utils/database';

const data = {
  goaled: [
    {x: 'Day 1', y: 3000},
    {x: 'Day 2', y: 2500},
    {x: 'Day 3', y: 4000},
  ],
  drunk: [
    {x: 'Day 1', y: 2000},
    {x: 'Day 2', y: 2500},
    {x: 'Day 3', y: 3000},
  ],
};

const DailyScreen = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [waterGoal, setWaterGoal] = useState(3000);
  const [waterDrank, setWaterDrank] = useState(0);

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
          <VictoryAxis
            dependentAxis
            label="mL"
            style={{axisLabel: {padding: 35}}}
          />
          <VictoryGroup offset={20}>
            <VictoryBar
              horizontal
              data={data.drunk}
              style={{data: {fill: '#21B6A8'}}}
            />
            <VictoryBar
              horizontal
              data={data.goaled}
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
