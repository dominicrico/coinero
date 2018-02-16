import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import {settings, settingsErrored, settingsLoading} from './settings';

const rootReducer = combineReducers({
  settings,
  settingsErrored,
  settingsLoading,
  router
});

export default rootReducer;
