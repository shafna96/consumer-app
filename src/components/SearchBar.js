import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/styles';
import {useNavigation} from '@react-navigation/native';

export default function SearchBar(
  props,
  {searchText, clicked, placeholder, onChangeText, onCancelSearch},
) {
  const navigation = useNavigation();
  const renderClose = () => {
    if (!searchText) {
      return <View style={styles.closeIcon} />;
    }
    if (searchText !== '') {
      return (
        <Pressable
          style={styles.closeIcon}
          onPress={() => {
            onCancelSearch('');
          }}>
          <Ionicons name="close" size={15} />
        </Pressable>
      );
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log('back pressed');
          navigation.goBack();
        }}
        style={styles.leftContainer}>
        <Feather name="chevron-left" size={20} color={Colors.darkGrayText} />
      </Pressable>

      <View style={styles.rightContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder={placeholder || 'Search'}
          value={searchText}
          onChangeText={value => onChangeText(value)}
          onTouchStart={clicked}
          {...props}
        />
        {renderClose()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: Colors.grayBackground,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  leftContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextInput: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: Colors.grayText100,
  },
  closeIcon: {
    height: 20,
    width: 20,
  },
});
