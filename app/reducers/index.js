import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
    dataReducer,
    nav
});

export default AppReducer;
