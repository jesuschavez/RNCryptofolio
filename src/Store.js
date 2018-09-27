import { Platform } from 'react-native';
import{
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './Reducers/index';

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
  rootReducer,
  middleware
);

export default Store;
