import {combineReducers} from "redux";
//////////////////////////////////////////////////
import authReducer from "../auth/authReducer";
import userReducer from "../user/userReducer";
import postsReducer from "../posts/postsReducer";



////common
import commonReducer from "../common/commonReducer";




export const rootReducer = combineReducers({
    auth: authReducer, common: commonReducer, user: userReducer, posts: postsReducer
})