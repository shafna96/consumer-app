import {StyleSheet, Pressable, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DefaultText from '../../../components/DefaultText';
import {Colors} from '../../../constants/styles';

export default function RenderHeader({style, onPress}) {
  return (
    <View style={[styles.headerView, style]}>
      <Pressable onPress={onPress}>
        <Ionicons name="chevron-back-sharp" size={20} style={{marginEnd: 15}} />
      </Pressable>
      <DefaultText style={styles.headerText}>Sort and Filter</DefaultText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 30,
    borderBottomColor: Colors.grayBackground,
    borderBottomWidth: 1,
  },
  headerText: {
    color: Colors.grayText70,
  },
});
