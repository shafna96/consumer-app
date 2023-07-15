import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {api} from '../../api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = (username, password) => {
    api.post('/v1/user/guestLogin', {username, password});
    setUserToken('token');
    AsyncStorage.setItem('userToken', 'token');
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
    } catch (e) {
      console.log(`isLogged in error is ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{login, logout, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
