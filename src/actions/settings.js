// import type {settingsStateType} from '../reducers/counter';

type actionType = {
  +type: object
};

export const SET_SETTINGS = 'SET_SETTINGS';
export const GET_SETTINGS = 'GET_SETTINGS';

export function setSettings() {
  return {
    type: SET_SETTINGS
  };
}

export function getSettings() {
  return {
    type: GET_SETTINGS
  };
}

export function setNewSettings() {
  return (dispatch: (action: actionType) => void) => {
    dispatch(setSettings());
  };
}

export function getCurrentSettings() {
  return (dispatch: (action: actionType) => void) => {
    dispatch(getSettings());
  };
}
