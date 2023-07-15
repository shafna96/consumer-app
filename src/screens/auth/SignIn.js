import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import images from '../../constants/images';
import {Colors, WIDTH} from '../../constants/styles';
import Feather from 'react-native-vector-icons/Feather';
import DefaultText from '../../components/DefaultText';
import ButtonRow from '../../components/ButtonRow';

export default function SignIn({navigation}) {
  let textInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  // useEffect(() => {
  //   textInput.focus();
  // }, []);

  const onChangePhone = value => {
    setPhoneNumber(value);
  };

  const onChangeFocus = () => {
    setFocusInput(true);
  };

  const onChangeBlur = () => {
    setFocusInput(false);
  };
  const onPressContinue = () => {
    navigation.navigate('OTP', {phoneNumber});
  };

  return (
    <View style={styles.screen}>
      <Image source={images.signInDish} style={styles.image} />

      <View style={styles.bottomContainer}>
        <DefaultText style={styles.welcomeText}>Welcome to EatMe</DefaultText>
        <DefaultText style={styles.enterText}>
          Enter mobile number to log in or register
        </DefaultText>

        <View
          style={[
            styles.phoneInput,
            {borderBottomColor: focusInput ? '#f9a91a' : '#5e5e5e'},
          ]}>
          <Text style={styles.phoneText}>+94</Text>
          <TextInput
            ref={input => (textInput = input)}
            keyboardType="phone-pad"
            placeholder="77 3641652"
            placeholderTextColor={Colors.placeholderText}
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={onChangePhone}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
            maxLength={9}
          />
        </View>
      </View>
      <ButtonRow
        style={{flex: 1, alignItems: 'flex-end'}}
        titleOne={'Back'}
        titleTwo={
          <Text>
            Continue <Feather name="chevron-right" size={15} />
          </Text>
        }
        onPressOne={() => {}}
        onPressTwo={onPressContinue}
        buttonStyleTwo={{backgroundColor: Colors.grayText100}}
        textStyleTwo={{color: 'white'}}
      />

      {/* <Pressable
        onPress={() => {
          navigation.navigate('OTP');
        }}>
       
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 25,
  },
  bottomContainer: {
    paddingTop: WIDTH * 0.6,
  },
  image: {
    width: WIDTH * 0.75,
    height: WIDTH * 0.75,
    position: 'absolute',
    marginTop: -WIDTH * 0.2,
    alignSelf: 'center',
  },
  welcomeText: {fontFamily: 'Proxima Nova', fontSize: 25},
  enterText: {
    fontFamily: 'Proxima Nova',
    fontSize: 12,
    paddingVertical: 23,
  },
  phoneText: {
    fontFamily: 'Proxima Nova Bold',
    fontSize: 16,
    borderRightColor: '#5e5e5e',
    borderRightWidth: 1,
    paddingRight: 12,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'Proxima Nova',
    marginLeft: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
});
