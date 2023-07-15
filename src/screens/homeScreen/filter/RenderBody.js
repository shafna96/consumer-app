import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {Colors, WIDTH} from '../../../constants/styles';
import DefaultText from '../../../components/DefaultText';
import {FlatList} from 'react-native-gesture-handler';

export default function RenderBody({
  containerStyle,

  renderItem,
  data,
  sortByClickHandler,
  sortByClickedStyle,
  cuisinesClickedHandler,
  cuisinesClickedStyle,
  offersClickedHandler,
  offersClickedStyle,
  dietaryClickedHandler,
  dietaryClickedStyle,
}) {
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.rightBodyContainer}>
        <Pressable onPressOut={sortByClickHandler}>
          <View style={[styles.pressableView, sortByClickedStyle]}>
            <DefaultText>Sort By</DefaultText>
            <Text style={{color: Colors.primaryOrange}}>Rating</Text>
          </View>
        </Pressable>

        <Pressable onPressOut={cuisinesClickedHandler}>
          <View style={[styles.pressableView, cuisinesClickedStyle]}>
            <Text>Cuisines</Text>
          </View>
        </Pressable>

        <Pressable onPressOut={offersClickedHandler}>
          <View style={[styles.pressableView, offersClickedStyle]}>
            <Text>Offers</Text>
          </View>
        </Pressable>

        <Pressable onPressOut={dietaryClickedHandler}>
          <View style={[styles.pressableView, dietaryClickedStyle]}>
            <Text>Dietary</Text>
          </View>
        </Pressable>
      </View>

      <View style={containerStyle}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  rightBodyContainer: {
    flex: 1,
    paddingHorizontal: 3,
    backgroundColor: Colors.grayBackground,
  },
  pressableView: {
    padding: 15,
    minHeight: WIDTH * 0.2,
    justifyContent: 'center',
  },
});
