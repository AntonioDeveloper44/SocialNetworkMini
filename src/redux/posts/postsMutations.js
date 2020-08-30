import {CREATE_POST, DELETE_POST_BY_ID, GET_ALL_POSTS, GET_POSTS_BY_ID, UPDATE_POST_BY_ID} from "./postsTypes";

export function setPost(data) {

    return {
        type: CREATE_POST,
        data
    }
}

export function getAllPosts(data) {

    return {
        type: GET_ALL_POSTS,
        data
    }
}

export function getPosts(data) {

    return {
        type: GET_POSTS_BY_ID,
        data
    }
}

export const deletePost = postId => ({
    type: DELETE_POST_BY_ID,
    postId
});

export const updatePost = (postId , values) => ({
    type: UPDATE_POST_BY_ID,
    postId,
    values
})