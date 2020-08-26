import {CREATE_POST} from "./postsTypes";

export function setPost(data) {

    return {
        type: CREATE_POST ,
        data
    }
}