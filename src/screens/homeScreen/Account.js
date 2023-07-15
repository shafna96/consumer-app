import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultButton from '../../components/DefaultButton';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/actions/authAction';
import DefaultText from '../../components/DefaultText';
import AccountPressable from './account/AccountPressable';
import images from '../../constants/images';
import {HEIGHT, WIDTH} from '../../constants/styles';

export default function Account() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logout());
  };
  return (
    <View style={styles.screen}>
      <DefaultText>Account Details</DefaultText>
      <View style={styles.bottomContainer}>
        <AccountPressable
          source={images.calendarCheck}
          title="My Orders"
          onPress={() => {}}
        />
        <AccountPressable
          source={images.person}
          title="My Profile"
          onPress={() => {}}
        />
        <AccountPressable
          source={images.creditCard}
          title="Wallet / Payment"
          onPress={() => {}}
        />
        <AccountPressable
          source={images.question}
          title="Help"
          onPress={() => {}}
        />
        <AccountPressable
          source={images.file}
          title="Terms and Conditions"
          onPress={() => {}}
        />
        <AccountPressable
          source={images.facebook}
          title="Like us on facebook"
          onPress={() => {}}
        />
        <AccountPressable
          source={images.googlePlay}
          title="Rate us on Play Store"
          onPress={() => {}}
        />
        <AccountPressable
          source={images.logOut}
          title="Log Out"
          onPress={() => {
            logoutHandler();
          }}
        />
        {/* <DefaultButton
        title={'logout'}
        onPress={() => {
          logoutHandler();
        }}
      /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: WIDTH * 0.08,
    paddingTop: HEIGHT * 0.05,
  },
  bottomContainer: {paddingTop: HEIGHT * 0.02},
});
