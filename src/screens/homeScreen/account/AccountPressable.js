import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, WIDTH} from '../../../constants/styles';

export default function AccountPressable({title, source, onPress}) {
  return (
    <Pressable style={styles.main} onPress={onPress}>
      <Image source={source} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',

    alignItems: 'center',
    marginVertical: 14,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    color: Colors.grayText100,
    fontFamily: 'Proxima Nova',
    //textAlign: 'center',
  },
});
