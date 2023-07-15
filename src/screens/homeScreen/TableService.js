import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Tracker from '../../components/Tracker';
import {TableLogo, Map} from '../../assets/images';

export default function TableService() {
  return (
    <View style={styles.screen}>
      <Tracker logo={<TableLogo />} map={<Map />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {paddingHorizontal: 11, paddingTop: 16},
});
