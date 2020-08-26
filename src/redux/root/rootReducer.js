import {combineReducers} from "redux";
//////////////////////////////////////////////////
import authReducer from "../auth/authReducer";
import userReducer from "../user/userReducer";


////common
import commonReducer from "../common/commonReducer";




export const rootReducer = combineReducers({
    auth: authReducer, common: commonReducer, user: userReducer,
})