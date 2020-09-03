import { GET_ALL_USERS, PUT_AVATAR } from "./userTypes";

const initialState = {
  avatar: "",
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_AVATAR:
      return { ...state, avatar: action.data };

    case GET_ALL_USERS:
      return { ...state, users: action.data };

    default:
      return state;
  }
};

export default userReducer;
