import AsyncStorage from '@react-native-async-storage/async-storage';
import {api} from '../../../api';
import {LOGIN, LOGOUT} from './actionTypes';
import {Platform} from 'react-native';

export const login = guestUserId => {
  return async dispatch => {
    try {
      const params = {
        guestUserId: guestUserId,
      };
      const res = await api.post('/v1/user/guestLogin', params);
      await AsyncStorage.setItem('userToken', res.data.token);

      const payload = {
        token: res.data.token,
      };

      dispatch({
        type: LOGIN,
        payload: payload,
      });
      console.log(res.data.token);
      return true;
    } catch (e) {
      console.log(`isLogged in error is ${e}`);
      return false;
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      // await AsyncStorage.removeItem('userToken');
      if (Platform.OS === 'android') {
        await AsyncStorage.clear();
      }
      if (Platform.OS === 'ios') {
        await AsyncStorage.clear();
      }
      console.log('clicked');
      dispatch({
        type: LOGOUT,
        payload: null,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
