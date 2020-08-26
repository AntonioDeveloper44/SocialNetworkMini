import {CREATE_POST} from "./postsTypes";

const initialState = {
    posts:[]
}

const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_POST :
            return { ...state , posts: state.posts.concat([action.payload])}
    }

}