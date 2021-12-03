import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  onPress,
  LinearGradient,
} from 'react-native';
import Water from '../../../assets/images/water-bottle.png';

const WaterOption = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={Water}
          resizeMode="cover"
          style={{width: 60, height: 60, marginRight: 300, marginTop: 20}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default WaterOption;
