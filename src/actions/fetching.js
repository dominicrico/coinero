// @flow
// import type {settingsStateType} from '../reducers/settings';

export const FETCH_LOADING = 'FETCH_LOADING';

export function isLoading(bool: boolean = false) {
  return {
    type: FETCH_LOADING,
    isLoading: bool
  };
}
