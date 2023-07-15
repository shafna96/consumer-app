import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import DefaultText from './DefaultText';
import {Colors, WIDTH} from '../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RenderList({
  data,
  contentContainerStyle,
  containerStyle,
  horizontal,
}) {
  return (
    <View style={[contentContainerStyle, styles.resturants]}>
      <ScrollView horizontal={horizontal}>
        {data.map((item, index) => (
          <View
            style={[
              containerStyle,
              styles.container,
              {width: horizontal ? WIDTH * 0.75 : WIDTH * 0.95},
            ]}
            key={index}>
            <Image
              source={{uri: item.imagePath}}
              style={[
                styles.image,
                {width: horizontal ? WIDTH * 0.75 : WIDTH * 0.95},
              ]}
              resizeMode="stretch"
            />
            <View
              style={[
                styles.badgeConainer,
                {
                  width: horizontal ? WIDTH * 0.69 : WIDTH * 0.89,
                },
              ]}>
              {item.couponBadge && (
                <View style={styles.couponBadge}>
                  <Text style={styles.badgeText}>{item.couponBadge}</Text>
                </View>
              )}
              <View style={styles.estimateTime}>
                <Text style={[styles.badgeText, {fontSize: 11, paddingTop: 5}]}>
                  {item.estimatedTime}
                </Text>
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <DefaultText style={styles.name}>{item.name}</DefaultText>
              {(item.ratingAverage ||
                item.ratingCount ||
                item.categoryTags) && (
                <Text>
                  {item.ratingAverage > 0 && (
                    <Text style={{color: Colors.green}}>
                      {item.ratingAverage}
                      {'\xa0'}
                      Excellent {'\xa0'}
                    </Text>
                  )}

                  {item.ratingCount && (
                    <Text
                      style={{
                        color: Colors.grayText,
                      }}>{`(${item.ratingCount}+) • `}</Text>
                  )}
                  {item.categoryTags && (
                    <Text style={{color: Colors.grayText50}}>
                      {item.categoryTags.replace(/,/g, ' • ')}
                    </Text>
                  )}
                </Text>
              )}

              {item.couponDescription && (
                <Text style={{color: Colors.offerTag}}>
                  <Ionicons name="ios-pricetag" />
                  {'\xa0\xa0'}
                  {item.couponDescription}
                </Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  resturants: {
    paddingTop: 10,
  },
  container: {
    marginHorizontal: 9,
    marginVertical: 8,
  },
  image: {
    height: WIDTH * 0.4, // 156,
  },
  bottomContainer: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  name: {
    fontSize: 16,
    color: Colors.grayText100,
  },
  badgeConainer: {
    position: 'absolute',
    marginTop: 15,
    marginLeft: 15,
    height: WIDTH * 0.38,
  },

  couponBadge: {
    width: WIDTH * 0.16,
    height: WIDTH * 0.16,
    borderRadius: (WIDTH * 0.16) / 2,
    backgroundColor: Colors.offerTag,
    //position: 'absolute',
    //margin: 15,
  },
  badgeText: {
    alignSelf: 'center',
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Proxima Nova Bold',
    color: 'white',
    paddingTop: 13,
    paddingHorizontal: 5,
  },
  estimateTime: {
    alignSelf: 'flex-end',
    bottom: 0,
    position: 'absolute',
    width: WIDTH * 0.18,
    height: (WIDTH * 0.18) / 2,
    backgroundColor: Colors.grayText100,
  },
});
