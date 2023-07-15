import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import OtpScreen from '../screens/auth/OtpScreen';
import HomeStack from './HomeStack';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  const token = useSelector(state => state.authReducer.token);
  const [logged, setLogged] = useState(false);

  const isLogged = () => {
    if (token) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  };

  useEffect(() => {
    isLogged();
  }, [token]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          backgroundColor: 'white',
        },
      }}>
      {!logged ? (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="OTP" component={OtpScreen} />
        </>
      ) : (
        <Stack.Screen name="HomeStack" component={HomeStack} />
      )}
    </Stack.Navigator>
  );
}
