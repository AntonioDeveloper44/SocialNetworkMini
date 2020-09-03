import {
  HIDE_ALERT,
  SHOW_ALERT,
  TOGGLE_IS_FETCHING,
  TOGGLE_MODAL,
} from './commonTypes';

export function toggleModal() {
  return {
    type: TOGGLE_MODAL,
  };
}

export function toggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
}

export function showAlert(text) {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text,
    });

    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT,
  };
}
