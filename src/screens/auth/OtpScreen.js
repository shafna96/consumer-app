import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, WIDTH} from '../../constants/styles';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/actions/authAction';
import DefaultText from '../../components/DefaultText';
import OtpTextInput from '../../components/OtpTextInput';
import ButtonRow from '../../components/ButtonRow';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function OtpScreen({
  route: {
    params: {phoneNumber},
  },
  navigation,
}) {
  const [otp, setOtp] = useState();

  const dispatch = useDispatch();

  const loginHandler = async () => {
    await dispatch(login(otp));
  };

  const onChangeOtp = value => {
    setOtp(value);
  };

  return (
    <View style={styles.screen}>
      <DefaultText>Verify your phone number</DefaultText>
      <View style={styles.textContainer}>
        <DefaultText style={styles.text}>Hi there,</DefaultText>
        <DefaultText style={styles.text}>
          We have sent you a 4 digit code to this number
        </DefaultText>
        <DefaultText style={styles.phoneNumber}>{phoneNumber}</DefaultText>
      </View>
      {/* <View style={styles.OtpInput}> */}
      <OTPInputView
        pinCount={4}
        keyboardType="number-pad"
        style={{height: 100, width: '100%'}}
        codeInputFieldStyle={styles.inputField}
        onCodeChanged={onChangeOtp}
        //code={otp}
        onCodeFilled={code => {
          console.log(code);
        }}
      />
      {/* <OtpTextInput onChangeText={onChangePassword} value={password} />
        <OtpTextInput />
        <OtpTextInput />
        <OtpTextInput /> */}
      {/* </View> */}
      {/* <OTPInputView pinCount={4} /> */}
      <DefaultText style={{fontSize: 14, marginTop: 35}}>
        Resend code via SMS (30)
      </DefaultText>
      <ButtonRow
        style={{flex: 1, alignItems: 'flex-end'}}
        titleOne={'Back'}
        titleTwo={
          <Text>
            Continue <Feather name="chevron-right" size={15} />
          </Text>
        }
        onPressOne={() => {
          navigation.goBack();
        }}
        onPressTwo={() => {
          loginHandler(otp);
        }}
        buttonStyleTwo={{backgroundColor: Colors.grayText100}}
        textStyleTwo={{color: 'white'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 50,
  },
  textContainer: {
    paddingTop: 35,
  },
  text: {
    fontFamily: 'Proxima Nova',
    fontSize: 14,
  },
  phoneNumber: {
    color: '#047aaf',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  inputField: {
    width: WIDTH * 0.15,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderBottomColor,
  },
});
