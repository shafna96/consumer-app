import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {RenderBanner, RenderCategories, RenderRestaurants} from './content';

export default function Content() {
  return (
    <ScrollView nestedScrollEnabled style={{flexGrow: 1}}>
      {/* Categories */}
      <RenderCategories />
      {/* renderBanner */}
      <RenderBanner />
      {/* Render Restaurants */}
      <RenderRestaurants />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
