import {CREATE_POST, DELETE_POST_BY_ID, GET_ALL_POSTS, GET_POSTS_BY_ID, UPDATE_POST_BY_ID} from "./postsTypes";


const initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type){

        case CREATE_POST :
            return { ...state, posts: [ ...state.posts , action.data] }

        case GET_ALL_POSTS:
            return { ...state, posts: action.data  }

        case GET_POSTS_BY_ID:
            return {...state, posts: action.data }

        case DELETE_POST_BY_ID:
            return {...state, posts: state.posts.filter(post => post._id !== action.postId)}

        case UPDATE_POST_BY_ID:
            return {...state, posts: action.values}

            default: return state;
    }
}

export default postsReducer;