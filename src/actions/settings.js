// @flow
// import type {settingsStateType} from '../reducers/settings';

export const SET_SETTINGS = 'SET_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';
export const SETTINGS_ERRORED = 'SETTINGS_ERRORED';

export function setSettings(settings: object = {}) {
  return {
    type: SET_SETTINGS,
    settings: settings
  };
}

export function getSettings() {
  return {
    type: GET_SETTINGS
  };
}

export function settingsError(bool: boolean = false) {
  return {
    type: SETTINGS_ERRORED,
    error: bool
  };
}
