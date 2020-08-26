import {PUT_AVATAR} from "./userTypes";

export function putAvatar(data) {

    return {
        type: PUT_AVATAR ,
        data
    }
}