import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tracker from '../../components/Tracker';
import {DeliveryBoy} from '../../assets/images';
import Content from './Content';

export default function Delivery() {
  return (
    <View style={styles.screen}>
      <Tracker logo={<DeliveryBoy />} style={styles.tracker} />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
  tracker: {paddingHorizontal: 11, paddingTop: 16},
});
