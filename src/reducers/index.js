import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {settings, settingsError} from './settings';
import {isLoading} from './fetch';

const rootReducer = combineReducers({
  settings,
  settingsError,
  isLoading,
  router
});

export default rootReducer;
