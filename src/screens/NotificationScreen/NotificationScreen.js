import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Animated,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import {Icon} from 'react-native-eva-icons';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const COLORS = {
  red: '#FF0000',
  green: '#4CA64C',
  blue: '#21B6A8',
  white: '#ffffff',
  grey: '#dddddd',
};
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
const rowAnimatedValues = {};
Array(20)
  .fill('')
  .forEach((_, i) => {
    rowAnimatedValues[`${i}`] = {
      rowHeight: new Animated.Value(60),
      deleteBtnWidth: new Animated.Value(100),
    };
  });

const VisibleItem = props => {
  const {data} = props;

  const rowKey = data.item.key;

  return (
    <Animated.View
      style={[styles.rowFront, {height: rowAnimatedValues[rowKey].rowHeight}]}>
      <Text>{data.item.text}</Text>
    </Animated.View>
  );
};
const HiddenItemWithActions = props => {
  const {rightActionActivated, swipeAnimatedValue, data} = props;

  const rowKey = data.item.key;

  if (rightActionActivated) {
    ReactNativeHapticFeedback.trigger('impactLight', options);
    Animated.timing(rowAnimatedValues[rowKey].deleteBtnWidth, {
      toValue: Math.abs(swipeAnimatedValue.__getValue()),
      duration: 250,
      useNativeDriver: false,
    }).start();
  } else {
    Animated.timing(rowAnimatedValues[rowKey].deleteBtnWidth, {
      toValue: 100,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }

  return (
    <View style={styles.rowBack}>
      <TouchableWithoutFeedback onPress={() => console.log('touched')}>
        <Animated.View
          style={[
            styles.backBtn,
            styles.backRightBtn,
            styles.backRightBtnLeft,
            {
              width: 100,
              transform: [
                {
                  translateX: swipeAnimatedValue.interpolate({
                    inputRange: [-200, -120, 0],
                    outputRange: [-100, -20, 100],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.backBtnInner}>
            <Icon
              name="arrow-back-outline"
              fill="#ffffff"
              width={26}
              height={26}
            />
            <Text style={styles.backBtnText}>Right</Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => console.log('touched')}>
        <Animated.View
          style={[
            styles.backBtn,
            styles.backRightBtn,
            styles.backRightBtnRight,
            {
              width: rowAnimatedValues[rowKey].deleteBtnWidth,
              transform: [
                {
                  translateX: swipeAnimatedValue.interpolate({
                    inputRange: [-200, -120, 0],
                    outputRange: [0, 40, 100],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.backBtnInner}>
            <Icon
              name="trash-2-outline"
              fill="#ffffff"
              width={26}
              height={26}
            />
            <Text style={styles.backBtnText}>Delete</Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const NotificationScreen = () => {
  const [list, setList] = useState(
    [...new Array(20)].map((_, index) => ({
      key: `${index}`,
      text: `Notification numbers ${index}`,
    })),
  );

  const {width: screenWidth} = useWindowDimensions();

  const renderItem = (data, rowMap) => (
    <VisibleItem data={data} rowMap={rowMap} />
  );
  const renderHiddenItem = (data, rowMap) => (
    <HiddenItemWithActions data={data} rowMap={rowMap} />
  );

  const onRightActionStatusChange = () => {
    console.log('on right actions status change');
  };

  const swipeGestureEnded = (rowKey, data) => {
    if (data.translateX < -200) {
      Animated.timing(rowAnimatedValues[rowKey].deleteBtnWidth, {
        toValue: screenWidth,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(rowAnimatedValues[rowKey].rowHeight, {
        toValue: 0,
        duration: 200,
        delay: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = list.filter(item => item.key !== rowKey);
        setList(newData);
      });
    }
  };
  return (
    <View>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 5,
            color: '#000000',
            alignSelf: 'center',
          }}>
          Notifications
        </Text>
      </View>
      <SwipeListView
        data={list}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-120}
        disableRightSwipe
        rightOpenValue={-120}
        stopRightSwipe={-201}
        rightActivationValue={-200}
        rightActionValue={-screenWidth}
        onRightActionStatusChange={onRightActionStatusChange}
        swipeGestureEnded={swipeGestureEnded}
        SwipeToOpenPercent={10}
        swipeToClosePercent={10}
        useNativeDriver={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.blue,
    borderBottomWidth: 1,
    flex: 1,
  },
  rowBack: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  backBtn: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    justifyContent: 'center',
  },
  backRightBtn: {
    right: 0,
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  backRightBtnLeft: {
    backgroundColor: COLORS.blue,
  },
  backRightBtnRight: {
    right: 0,
    backgroundColor: COLORS.red,
  },
  backBtnInner: {
    alignItems: 'center',
  },
  backBtnText: {
    color: COLORS.white,
    marginTop: 2,
  },
});

export default NotificationScreen;
