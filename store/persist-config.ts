import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usernameReducer from './features/username-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['username'], 
};

const rootReducer = combineReducers({
  username: persistReducer(persistConfig, usernameReducer),
});

export default rootReducer;
