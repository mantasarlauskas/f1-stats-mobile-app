import React from 'react';
import { NativeRouter } from 'react-router-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import Routes from './Routes';
import { initializeDatabase } from './database';

const store = createStore(rootReducer, applyMiddleware(thunk));

initializeDatabase();

export default () => (
  <Provider store={store}>
    <NativeRouter>
      <Routes />
    </NativeRouter>
  </Provider>
);
