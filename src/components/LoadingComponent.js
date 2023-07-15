import {StyleSheet, ActivityIndicator, View} from 'react-native';
import React from 'react';

export default function LoadingComponent() {
  return (
    <View style={styles.screen}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
