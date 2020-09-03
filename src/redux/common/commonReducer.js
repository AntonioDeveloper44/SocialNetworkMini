import {
  TOGGLE_IS_FETCHING,
  TOGGLE_MODAL,
  SHOW_ALERT,
  HIDE_ALERT,
} from './commonTypes';

const initialState = {
  visible: false,
  isFetching: false,
  alert: null,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, visible: !state.visible };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SHOW_ALERT:
      return { ...state, alert: action.payload };

    case HIDE_ALERT:
      return { ...state, alert: null };

    default:
      return state;
  }
};

export default commonReducer;
