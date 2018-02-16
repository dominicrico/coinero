// @flow
// import type {settingsStateType} from '../reducers/settings';

export const SET_SETTINGS = 'SET_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';
export const SETTINGS_ERRORED = 'SETTINGS_ERRORED';
export const SETTINGS_LOADING = 'SETTINGS_LOADING';

export function setSettings(settings: object) {
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

export function settingsErrored(bool: boolean) {
  return {
    type: SETTINGS_ERRORED,
    error: bool
  };
}

export function settingsLoading(bool: boolean) {
  return {
    type: SETTINGS_LOADING,
    loading: bool
  };
}

export function getSettingsFromStorage(dispatch) {
  return distpatch => {
    dispatch(settingsLoading('true'));
  };
}
