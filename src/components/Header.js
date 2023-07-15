import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DefaultText from './DefaultText';
import {Colors} from '../constants/styles';

export default function Header({title, name}) {
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <DefaultText>{title}</DefaultText>
        <Ionicons
          name={name}
          size={15}
          color={Colors.grayIcon}
          style={{marginLeft: 22, marginTop: 5}}
        />
      </View>
      <View>
        <Ionicons
          name="arrow-forward-outline"
          size={25}
          color={Colors.primaryOrange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 20,
  },
  leftHeader: {
    flexDirection: 'row',
  },
});
