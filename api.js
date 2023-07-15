import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_API_URL = 'https://qaconsumerapi.eatmeglobal.org/api';

export const api = axios.create({
  baseURL: BASE_API_URL,
});

api.interceptors.request.use(
  async function (config) {
    //  console.log({config});
    // Do something before request is sent

    const token = await AsyncStorage.getItem('userToken');
    // console.log(token);

    config.headers.Authorization = token;
    // console.log('Token===== ', token);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

api.interceptors.response.use(function (response) {
  return response;
});
