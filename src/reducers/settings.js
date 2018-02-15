import {SET_SETTINGS, GET_SETTINGS} from '../actions/settings';

export type settingsStateType = {
  +settings: object
};

type actionType = {
  +type: object
};

export default function settings(state: object = {}, action: actionType) {
  console.log(action);
  if (action.type === SET_SETTINGS) {
    return Object.assign({}, state, action);
  } else if (action.type === GET_SETTINGS) {
    return state;
  }
}
