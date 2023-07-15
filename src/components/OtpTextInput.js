import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function OtpTextInput({
  placeholder,
  onChangeText,
  keyboardType,
  style,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType="number-pad"
      style={[styles.textInput, style]}
      maxLength={1}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Proxima Nova',
    fontSize: 25,
    color: '#c20000',
  },
});
