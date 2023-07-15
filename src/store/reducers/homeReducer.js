import {
  RESTAURANT_DATA,
  GET_CATEGORIES,
  GET_DISH_BY_ID,
  GET_RESTAURANT_DETAILS,
  GET_BANNERS,
  GET_RESTAURANT_BY_OFFER,
  GET_SEARCH,
  GET_RESTAURANT_BY_CUISINES,
} from '../actions/actionTypes';

const initialState = {
  getSearchData: {
    allCategories: [],
    topCategories: [],
  },
  offerFilter: [],
  cuisinesFilter: [],
  dishId: [],
  restaurantDetail: [],
  restaurants: [],
  categories: [],
  latitude: '',
  longitude: '',
  restModule: '',
  resID: 5,
  lat: 6,
  long: 3,
  slideImageUrl: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_DATA: {
      return {
        ...state,
        restaurants: action.payload,
      };
    }
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case GET_SEARCH: {
      return {
        ...state,
        getSearchData: action.payload,
      };
    }
    case GET_DISH_BY_ID: {
      return {
        ...state,
        // dishId: action.payload,
      };
    }
    case GET_RESTAURANT_DETAILS: {
      return {
        ...state,
        restaurantDetail: action.payload,
      };
    }
    case GET_BANNERS: {
      return {
        ...state,
        slideImageUrl: action.payload,
      };
    }
    case GET_RESTAURANT_BY_OFFER: {
      return {
        ...state,
        offerFilter: action.payload,
      };
    }
    case GET_RESTAURANT_BY_CUISINES: {
      return {
        ...state,
        cuisinesFilter: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
