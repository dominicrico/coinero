// @flow

import {
  SET_SETTINGS,
  GET_SETTINGS,
  SETTINGS_ERRORED,
  SETTINGS_LOADING
} from '../actions/settings';

export type settingsStateType = {
  +settings: object
};

type actionType = {
  +type: string
};

export function settings(state: settingsStateType = {}, action: actionType) {
  if (action.type === GET_SETTINGS) {
    return state;
  } else if (action.type === SET_SETTINGS) {
    return Object.assign({}, state, action.settings);
  } else {
    return state;
  }
}

export function settingsErrored(state: boolean = false, action: actionType) {
  if (action.type === SETTINGS_ERRORED) {
    return action.error;
  } else {
    return state;
  }
}

export function settingsLoading(state: boolean = false, action: actionType) {
  if (action.type === SETTINGS_LOADING) {
    return action.loading;
  } else {
    return state;
  }
}
