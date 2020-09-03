import {
  GET_CURRENT_USER,
  LOG_OUT,
  SET_AUTH_USER,
  SET_TOKEN,
} from './authTypes';

export function setToken(data) {
  // localStorage.setItem('token', data.token);
  return {
    type: SET_TOKEN,
    data,
  };
}

export function setAuthUser(data) {
  return {
    type: SET_AUTH_USER,
    data,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function getCurrentUser(data) {
  return {
    type: GET_CURRENT_USER,
    data,
  };
}
