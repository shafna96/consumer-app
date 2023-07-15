import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Colors, HEIGHT, WIDTH} from '../constants/styles';
import DefaultText from './DefaultText';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import {FlatList} from 'react-native-gesture-handler';

export default function List({data, imageStyle}) {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.resturants}
      renderItem={({item, index}) => (
        <View>
          <Image source={item.images} style={imageStyle} />
          <View style={styles.textContainer}>
            <DefaultText style={styles.name}>{item.name}</DefaultText>
            <View>
              {item.resturant && (
                <Text style={[styles.text, {color: Colors.grayText50}]}>
                  {item.resturant}
                </Text>
              )}
            </View>
            {!item.off ? (
              <View style={styles.rating}>
                {item.isFavorite == true ? (
                  <Ionicons name="star" color={Colors.green} size={12} />
                ) : (
                  <Ionicons
                    name="star-outline"
                    color={Colors.green}
                    size={12}
                  />
                )}
                <Text style={styles.ratingText}>{item.rating}</Text>

                <Text style={[styles.text, {color: Colors.grayText}]}>
                  {`. ${item.count}`}
                </Text>
                <Text style={[styles.text, {color: Colors.grayText50}]}>
                  {item.items}
                </Text>
              </View>
            ) : (
              <View>
                <Text style={[styles.text, {color: Colors.green10}]}>
                  {item.save}
                </Text>
                <Text style={[styles.text, {color: Colors.offerTag}]}>
                  {item.valid}
                </Text>
              </View>
            )}

            {item.bonus && (
              <View style={styles.bonusContainer}>
                <Text style={[styles.text, {color: Colors.highlight}]}>
                  {item.bonus}
                </Text>

                <View>
                  <Ionicons
                    name="ios-information-circle-outline"
                    size={15}
                    color={Colors.grayIcon}
                    style={{marginLeft: 4, marginTop: 2}}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  resturants: {
    paddingTop: 10,
  },
  image: {
    width: WIDTH * 0.75, // 284,
    height: WIDTH * 0.5, //156,
    marginHorizontal: 9,
    marginVertical: 8,
    resizeMode: 'contain',
  },
  textContainer: {
    marginLeft: 23,
  },
  name: {
    fontSize: 16,
    color: Colors.grayText100,
  },
  rating: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    color: Colors.green,
  },
  text: {
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    marginLeft: 2,
  },
  bonusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
