import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

const rootReducer = combineReducers({
  cryptoData: CryptoReducer
});

export default rootReducer;
