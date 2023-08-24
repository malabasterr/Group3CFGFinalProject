import { SET_USERNAME, LOGOUT } from './actionTypes';

export const setUsername = (username) => ({
  type: SET_USERNAME,
  payload: username
});

export const logout = () => ({
  type: LOGOUT
});