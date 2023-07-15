import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultButton from './DefaultButton';
import Feather from 'react-native-vector-icons/Feather';

export default function ButtonRow({
  style,
  titleOne,
  titleTwo,
  onPressOne,
  onPressTwo,
  buttonStyleOne,
  buttonStyleTwo,
  textStyleOne,
  textStyleTwo,
}) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <DefaultButton
        title={titleOne}
        onPress={onPressOne}
        buttonStyle={buttonStyleOne}
        textStyle={textStyleOne}
      />
      <DefaultButton
        title={titleTwo}
        onPress={onPressTwo}
        buttonStyle={buttonStyleTwo}
        textStyle={textStyleTwo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
});
