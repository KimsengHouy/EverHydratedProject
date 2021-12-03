import React, {useRef} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import {RotationGestureHandler} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {mLToCups} from '../utils/convertion';

export const AddRemoveButton = ({
  amount,
  value,
  unitType,
  setValue,
  operation = 'add',
}) => {
  // Shake Animation
  const shakeAnimation = useRef(new Animated.Value(0)).current;
  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: -5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <TouchableOpacity
      style={{alignItems: 'center', padding: 5}}
      onPress={() => {
        operation == 'add'
          ? setValue(value + amount)
          : value - amount < 0
          ? setValue(0)
          : setValue(value - amount);
        startShake();
      }}>
      <View
        style={{
          backgroundColor: operation == 'add' ? '#21B6A8' : 'red',
          width: 50,
          height: 50,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          transform: [{rotate: '45deg'}],
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View style={{transform: [{translateX: shakeAnimation}]}}>
          <Icon
            style={{transform: [{rotate: '315deg'}]}}
            name="cup-water"
            size={24}
            color="white"
          />
        </Animated.View>
      </View>
      <Text style={{color: '#5a595b', fontWeight: '600'}}>
        {mLToCups(amount, unitType)} {unitType ? unitType : 'mL'}{' '}
      </Text>
    </TouchableOpacity>
  );
};
