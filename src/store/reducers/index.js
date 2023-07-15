import {combineReducers} from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  authReducer: authReducer,
  homeReducer: homeReducer,
});

export default rootReducer;
