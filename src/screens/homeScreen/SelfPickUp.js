import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Tracker from '../../components/Tracker';
import {ShoppingLogo, Map} from '../../assets/images';
export default function SelfPickUp() {
  return (
    <View style={styles.screen}>
      <Tracker logo={<ShoppingLogo />} map={<Map />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {paddingHorizontal: 11, paddingTop: 16},
});
