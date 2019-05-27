//Import the reducer
import AppReducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
 
export default createStore(AppReducer, applyMiddleware(thunk));
