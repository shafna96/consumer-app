import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {Colors} from '../constants/styles';

export default function DefaultButton({
  title,
  buttonStyle,
  textStyle,
  onPress,
}) {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: 'Proxima Nova Bold',
    fontSize: 14,
    color: Colors.grayText100,
  },
});
