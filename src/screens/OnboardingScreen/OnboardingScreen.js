import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('SignIn')}
      onDone={() => navigation.navigate('SignIn')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo1.png')}
            />
          ),
          title: 'Become Hydrated',
          subtitle: 'A New Way To Take Care Your Self',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              style={{width: '100%', height: '70%'}}
              source={require('../../../assets/images/drink1.png')}
            />
          ),
          title: 'By drinking',
          subtitle: 'Tracking Your Daily Drinking',
        },
        {
          backgroundColor: '#87CEEB',
          image: (
            <Image
              style={{width: '100%', height: '70%'}}
              source={require('../../../assets/images/drink2.png')}
            />
          ),
          title: 'Water ',
          subtitle: 'Easy To Use',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    maxWidth: 500,
    maxHeight: 350,
    height: '70%',
  },
});
