import axios from "axios";
import { getAllUsers, putAvatar } from "./userMutations";
import { store } from "../../index";
import { toggleIsFetching } from "../common/commonMutations";

export function putUserAvatar() {
  const config = {
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  };

  const userId = store.getState().auth.authUser._id;

  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    axios
      .put(`http://localhost:3001/api/v1/users/upload/${userId}`, config)
      .then((response) => {
        dispatch(toggleIsFetching(false));
        dispatch(putAvatar());
      })
      .catch((e) => {
        console.log("oshibka:", e);
      });
  };
}

export function getAllUsersOfServer() {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    axios
      .get("http://localhost:3001/api/v1/users")
      .then((response) => {
        dispatch(toggleIsFetching(false));
        // console.log(response)
        dispatch(getAllUsers(response.data));
      })
      .catch((e) => {
        console.log("ERR IN GET ALL POSTS OR GET POSTS:", e);
      });
  };
}
