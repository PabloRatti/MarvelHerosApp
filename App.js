import AppReducer from './app/reducers';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import thunk from 'redux-thunk';
import { AppNavigator, middleware } from './app/components/appNavigator';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(AppReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={ store }>
        <AppNavigator />
    </Provider>
);

export default App;
