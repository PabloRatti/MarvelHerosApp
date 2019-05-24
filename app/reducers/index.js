import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
  nav,
  dataReducer
});

export default AppReducer;