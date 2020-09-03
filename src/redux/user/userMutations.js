import {GET_ALL_USERS, PUT_AVATAR} from "./userTypes";


export function putAvatar(data) {

    return {
        type: PUT_AVATAR ,
        data
    }
}

export function getAllUsers(data) {

    return {
        type: GET_ALL_USERS,
        data
    }
}