// @flow

import {
  SET_SETTINGS,
  GET_SETTINGS,
  SETTINGS_ERRORED
} from '../actions/settings';

export type settingsStateType = {
  +settings: object
};

type actionType = {
  +type: string
};

export const settings = (state: settingsStateType = {}, action: actionType) => {
  switch (action.type) {
    default:
    case GET_SETTINGS:
      return state;
    case SET_SETTINGS:
      return {
        ...state,
        action
      }
  }
}

export const settingsError = (state: boolean = false, action: actionType) => {
  switch (action.type) {
    case SETTINGS_ERRORED:
      return action.error
    default:
      return state;
  }
}
