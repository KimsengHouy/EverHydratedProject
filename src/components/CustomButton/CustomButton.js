import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },

  container_PRIMARY: {
    backgroundColor: '#21B6A8',
  },
  container_SECONDARY: {
    borderColor: '#3871F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_TERTIARY: {
    color: 'gray',
    textAlign: 'right',
  },
  text_SECONDARY: {
    color: '#3871F3',
  },
});
export default CustomButton;
