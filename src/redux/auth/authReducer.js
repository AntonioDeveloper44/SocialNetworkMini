import {
  GET_CURRENT_USER,
  LOG_OUT,
  SET_AUTH_USER,
  SET_TOKEN,
} from './authTypes';

const initialState = {
  authUser: {},
  token: localStorage.getItem('token') || '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //занести данные регистрации в сервер
    case SET_AUTH_USER:
      return { ...state, authUser: action.data };
    //залогинится и забрать токен
    case SET_TOKEN:
      return { ...state, token: action.data.token };
    //удалить токен и разлогинится
    case LOG_OUT:
      localStorage.removeItem('token');
      return { ...state, token: '' };
    case GET_CURRENT_USER:
      return { ...state, authUser: action.data };
    default:
      return state;
  }
};

export default authReducer;
