import {
  RESTAURANT_DATA,
  GET_CATEGORIES,
  GET_DISH_BY_ID,
  GET_RESTAURANT_DETAILS,
  GET_RESTAURANT_BY_OFFER,
  GET_SEARCH,
  GET_BANNERS,
  GET_RESTAURANT_BY_CUISINES,
} from './actionTypes';
import {api} from '../../../api';

export const getHomeData = () => {
  return async (dispatch, getState) => {
    const params = {
      latitude: 6.937942140470412,
      longitude: 79.85225728825495,
      restModule: '',
    };
    //console.log(params);
    try {
      const res = await api.post('/v1/restaurant?', params);
      const data = res.data;
      //console.log('homedata', res.data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getCategoryData = () => {
  return async (dispatch, getState) => {
    const params = {
      latitude: 6.937942140470412,
      longitude: 79.85225728825495,
      restModule: '',
    };

    try {
      const res = await api.post('/v1/restaurant?', params);
      const data = res.data;
      const categories = data.categories;
      const dataUnique = [
        ...new Map(categories.map(item => [item.id, item])).values(),
      ];
      data.dataUnique = dataUnique;

      dispatch({
        type: GET_CATEGORIES,
        payload: dataUnique,
      });
      return dataUnique;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getRestaurantData = () => {
  return async (dispatch, getState) => {
    const params = {
      latitude: 6.937942140470412,
      longitude: 79.85225728825495,
      restModule: '',
    };

    try {
      const res = await api.post('/v1/restaurant?', params);
      const data = res.data;
      const restaurants = data.restaurants;
      const dataUnique = [
        ...new Map(restaurants.map(item => [item.id, item])).values(),
      ];
      data.dataUnique = dataUnique;
      console.log('resttt', restaurants);
      dispatch({
        type: RESTAURANT_DATA,
        payload: restaurants,
      });
      return restaurants;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getSearchData = () => {
  return async (dispatch, getState) => {
    // const {getSearchData} = getState().homeReducer;
    try {
      const res = await api.get('/v1/search/');
      const data = res.data;
      //console.log(data);
      const allCategories = data?.allCategories;
      const allDataUnique = [
        ...new Map(allCategories.map(item => [item.id, item])).values(),
      ];
      data.allDataUnique = allDataUnique;

      const topCategories = data?.topCategories;
      const topDataUnique = [
        ...new Map(topCategories.map(item => [item.id, item])).values(),
      ];
      data.topDataUnique = topDataUnique;
      // console.log(dataUnique);
      //  console.log('search', data?.topCategories);
      //  console.log('all', allDataUnique);

      dispatch({
        type: GET_SEARCH,
        payload: data,
      });
      return data;
      // return dataUnique;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getDishById = dishId => {
  return async dispatch => {
    try {
      const res = await api.get(`/v1/dish/${dishId}`);
      //const data =  res.data;
      console.log(res);
      //return res;
      // const dataUnique = [
      //   ...new Map(data.map(item => [item.id, item])).values(),
      // ];
      // data.dataUnique = dataUnique;
      // console.log('dataUnique', dataUnique);
      // dispatch({
      //   type: GET_CATEGORIES,
      //   payload: dataUnique,
      // });

      // return dataUnique;
    } catch (e) {
      console.log(e);
    }
  };
};
export const getRestaurantDetails = () => {
  return async (dispatch, getState) => {
    try {
      const {resID, lat, long} = getState().homeReducer;
      const params = {
        resID: resID,
        lat: lat,
        long: long,
      };
      const res = await api.post('/v1/restaurantDetails/', params);
      //console.log(res);
      dispatch({
        type: GET_RESTAURANT_DETAILS,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getRestInfoById = id => {
  return async dispatch => {
    try {
      const res = await api.get(`/v1/restaurantDetails/restInfo/${id}`);
      console.log('menu', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getMenuItems = id => {
  return async dispatch => {
    try {
      const res = await api.get(`/v1/restaurantDetails/getMenuItems/${id}`);
      console.log('menu', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
};
export const getMenu = id => {
  return async dispatch => {
    try {
      const res = await api.get(`/v1/restaurantDetails/getMenu/${id}`);
      console.log('menu', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getBanners = (latitude, longitude, restModule) => {
  return async (dispatch, getState) => {
    const params = {
      latitude: 6.937942140470412,
      longitude: 79.85225728825495,
      restModule: '',
    };
    // console.log(params);
    try {
      const res = await api.post('/v1/banner/', params);
      const data = res.data;
      // console.log(data);
      dispatch({
        type: GET_BANNERS,
        payload: data,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getRestaurantByOffers = (latitude, longitude) => {
  return async dispatch => {
    try {
      const params = {
        latitude: latitude,
        latitude: longitude,
      };
      const res = await api.post('/v1/restaurant/filterRestByOffers', params);
      console.log(res.data);

      dispatch({
        type: GET_RESTAURANT_BY_OFFER,
        payload: res.data,
      });
      return res.data;
    } catch (e) {
      console.log('Offer error', e);
    }
  };
};

export const getRestaurantByCuisines = (latitude, longitude, type) => {
  return async dispatch => {
    try {
      const params = {
        latitude: latitude,
        latitude: longitude,
        type,
      };
      const res = await api.post('/v1/restaurant/filterRestByCuisines', params);
      console.log(res.data);

      dispatch({
        type: GET_RESTAURANT_BY_CUISINES,
        payload: res.data,
      });
      return res.data;
    } catch (e) {
      console.log('Offer error', e);
    }
  };
};
