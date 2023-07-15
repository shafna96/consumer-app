import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';
import {Colors, WIDTH, HEIGHT} from '../constants/styles';

import {Equalizer} from '../assets/images';

import Svg from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SearchBar from './SearchBar';
import {useNavigation} from '@react-navigation/native';
import Filter from '../screens/homeScreen/Filter';

export default function Tracker({logo, map, style}) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style}>
      <Filter
        onPressClose={() => {
          setModalVisible(!modalVisible);
        }}
        isVisible={modalVisible}
      />

      <View style={styles.delivery}>
        {/* DELIVERYTO */}
        <View style={styles.svg}>
          <Svg>{logo}</Svg>
        </View>

        <View style={styles.now}>
          <Text style={styles.textNow}>Now</Text>
        </View>
        <View style={styles.map}>
          <Svg>{map}</Svg>
        </View>
      </View>

      <View style={styles.tracker}>
        <View style={styles.locationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textlocation}>Current Location</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons
              name="chevron-down-sharp"
              size={15}
              color={Colors.grayText50}
            />
          </View>
        </View>
        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('Search');
            }}
            style={styles.search}>
            <View style={styles.searchIcon}>
              <Feather name="search" size={20} color={Colors.grayText} />
            </View>
            <View style={styles.textInput}>
              <Text style={{color: Colors.grayText}}>
                Dishes, Restaurants or Cuisines
              </Text>
            </View>
          </Pressable>
          <Pressable
            // onPress={() => {
            //   navigation.navigate('Filter');
            // }}
            onPress={() => {
              setModalVisible(true);
              console.log('modal on');
            }}
            style={styles.equalizer}>
            <Equalizer />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  delivery: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  svg: {
    position: 'absolute',
    marginLeft: 3,
  },
  now: {
    marginLeft: '16%', //64px
    height: 16,
  },
  map: {
    position: 'absolute',
    marginLeft: '87%',
  },
  textNow: {
    color: Colors.grayText,
    fontSize: 11,
  },
  tracker: {
    paddingBottom: '3.5%', //15
    borderBottomColor: Colors.grayBackground,
    borderBottomWidth: 2.5,
    width: WIDTH,
  },
  locationContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textContainer: {
    height: 36,
    marginLeft: '15%', //60
  },
  iconContainer: {
    marginLeft: '10%', //40
  },
  textlocation: {
    color: Colors.grayText70,
    fontFamily: 'Proxima Nova Bold',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
    flexWrap: 'wrap',
  },
  search: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    width: '80%',
    height: 49,
    backgroundColor: Colors.grayBackground,
    borderRadius: 4,
    marginTop: '3.5%', //18
    paddingLeft: '2.5%', //15
  },
  searchIcon: {
    justifyContent: 'center',
  },
  textInput: {
    marginLeft: '3.9%', //15
    color: Colors.grayText,
    justifyContent: 'center',
  },
  equalizer: {
    marginTop: '10%', //40
    marginLeft: '6%', //25
    justifyContent: 'space-between',
  },
});
