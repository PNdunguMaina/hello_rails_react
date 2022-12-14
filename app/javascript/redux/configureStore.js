import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greeting';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
