import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/styles';

export default function DefaultText({children, style}) {
  return <Text style={[styles.text, {...style}]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: Colors.grayText50,
    fontFamily: 'Proxima Nova Bold',
  },
});
