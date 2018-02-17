// @flow

import {
  FETCH_LOADING
} from '../actions/fetching';

export type fetchStateType = {
  +fetch: object
};

type actionType = {
  +type: string
};

export const isLoading = (state: boolean = false, action: actionType) => {
  switch (action.type) {
    case FETCH_LOADING:
      return action.isLoading
    default:
      return state;
  }
}
