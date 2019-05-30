import { AppNavigator } from './app/components/appNavigator';
import AppReducer from './app/reducers';
import { Provider } from 'react-redux';
import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(AppReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={ store }>
        <AppNavigator />
    </Provider>
);

export default App;
