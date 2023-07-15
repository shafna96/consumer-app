import {LOGIN, LOGOUT} from '../actions/actionTypes';

const initialState = {
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.payload.token,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
