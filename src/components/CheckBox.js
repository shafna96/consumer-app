import {StyleSheet, Pressable, Image, View, Text} from 'react-native';
import React from 'react';
import images from '../constants/images';
import {WIDTH} from '../constants/styles';

export default function CheckBox({style, selected, label, onPress}) {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.checkBoxContainer} onPress={onPress}>
        {selected && <Image source={images.checkbox} style={styles.imgStyle} />}
      </Pressable>
      <Pressable onPress={onPress}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  checkBoxContainer: {
    width: WIDTH * 0.06,
    height: WIDTH * 0.06,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'white',
    marginRight: 10,
  },
  imgStyle: {width: WIDTH * 0.06, height: WIDTH * 0.06},
});
