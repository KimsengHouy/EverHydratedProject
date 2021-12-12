import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  useWindowDimensions,
  Alert,
  Animated,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryAxis,
  VictoryLegend,
  VictoryLine,
} from 'victory-native';
import {ToastAndroid} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/core';
import {CalendarList} from 'react-native-calendars';
import {today} from '../../utils/uliti';
import Modal from 'react-native-modal';
import {Title} from 'react-native-paper';

const DailyScreen = () => {
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(true);
  const [waterGoal, setWaterGoal] = useState('');
  const [waterDrank, setWaterDrank] = useState('');

  const [marked, setMarked] = useState({});
  const [waterObject, setWaterObject] = useState({});
  const [selected, setSelected] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    swipeDirection = 'left';
  };

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
      }),
      ToastAndroid.show(
        'Your Report have been save successfully.',
        ToastAndroid.SHORT,
      );
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
            padding: 25,
            flexDirection: 'row',
          }}>
          Daily Report
        </Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text
            style={{
              fontSize: 13,

              marginTop: -85,
              color: '#21B6A8',
              padding: 25,
            }}>
            Your Report
          </Text>
          <Modal
            style={styles.modalContent}
            animationType="slide"
            backgroundColor="#47D3FF"
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}
            backdropColor="white">
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Title
                style={{
                  marginVertical: 10,

                  marginTop: -5,
                }}>
                {' '}
                {userData ? userData.fullname : ''} 's Report
              </Title>
              <Text
                style={{color: '#FFFFFF', fontSize: 20, fontStyle: 'italic'}}>
                Water Goal is: {userData.waterGoal ? userData.waterGoal : ''} mL
              </Text>
              <Text
                style={{color: '#FFFFFF', fontSize: 20, fontStyle: 'italic'}}>
                Water Drunk is: {userData.waterDrank ? userData.waterDrank : ''}{' '}
                mL
              </Text>
            </View>
          </Modal>
        </TouchableOpacity>
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
      <View style={styles.calendar}>
        <CalendarList
          theme={{
            calendarBackground: '#FFFFFF',
            textSectionTitleColor: '#21B6A8',
            selectedDayTextColor: '#ffffff',
            selectedDayBackgroundColor: '#2176FF',
            dayTextColor: '#000000',
            monthTextColor: '#000000',
            textMonthFontWeight: 'bold',
          }}
          firstDay={1}
          horizontal={true}
          pagingEnabled={true}
          onDayPress={day => {
            if (!waterObject.hasOwnProperty(day['dateString'])) {
              setSelected(null);
            } else {
              setSelected(day['dateString']);
            }
          }}
          markedDates={{
            ...marked,
            [today()]: {selected: true, selectedColor: '#21B6A8'},
          }}
        />
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
      <View style={styles.btn}>
        <CustomButton text="Save" onPress={saveUserReport} />
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
  calendar: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginVertical: -25,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: -25,
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 150,
    borderRadius: 30,
    marginVertical: 250,
  },
});

export default DailyScreen;
