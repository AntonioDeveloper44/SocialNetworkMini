import axios from 'axios';
import {
  deletePost,
  getAllPosts,
  getPosts,
  setPost,
  updatePost,
} from './postsMutations';
import { store } from '../../index';
import { history } from './../../index';
import { showAlert, toggleIsFetching } from '../common/commonMutations';

export function setPostToServer(values) {
  const config = {
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  };

  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    axios
      .post(
        'http://localhost:3001/api/v1/posts',
        {
          title: values.title,
          fullText: values.fullText,
          description: values.description,
        },
        config,
      )

      // .then(function(response) {
      //     // console.log(response)
      //     dispatch(setPost(response.data))
      //
      // }) ======>
      .then((response) => {
        // console.log(response)
        dispatch(toggleIsFetching(false));
        dispatch(setPost(response.data));
      })

      .catch((e) => {
        if ((e.code = 11000)) {
          dispatch(showAlert('Пост с таким названием уже существует'));
          //////////////////////////////////////////ALERT
        }
      });
  };
}

export function getAllPostsOfServer() {
  // const postedById = '?postedBy=' + store.getState().auth.authUser._id
  // `?postedBy=${store.getState().auth.authUser._id}`
  // const settings = {accept: 'application/json'}

  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    axios
      .get('http://localhost:3001/api/v1/posts')
      .then((response) => {
        dispatch(toggleIsFetching(false));
        // console.log(response)
        dispatch(getAllPosts(response.data));
      })
      .catch((e) => {
        console.log('ERR IN GET ALL POSTS OR GET POSTS:', e);
      });
  };
}

export function getPostsById(userId) {
  // const postedById = `?postedBy=${userId}`;
  // + store.getState().auth.authUser._id

  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    axios
      .get(`http://localhost:3001/api/v1/posts/?postedBy=${userId}`)
      .then((response) => {
        dispatch(toggleIsFetching(false));
        dispatch(getPosts(response.data));
      })
      .catch((e) => {
        console.log('error by id ', e);
      });
  };
}

export function deletePostById(postId) {
  //postId - то что принимает в себя функция (при событии на onClick)
  const config = {
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
  };

  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    axios
      .delete(`http://localhost:3001/api/v1/posts/${postId}`, config)
      .then(() => {
        dispatch(toggleIsFetching(false));
        //postId - смотри выше
        dispatch(deletePost(postId));
      })
      .catch((e) => {
        console.log('error when delete', e);
      });
  };
}

export function updatePostById(postId, values) {
  const config = {
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    // ContentType: `application/json`
  };

  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    axios
      .patch(
        `http://localhost:3001/api/v1/posts/${postId}`,
        {
          title: values.title,
          fullText: values.fullText,
          description: values.description,
        },
        config,
      )

      .then((response) => {
        dispatch(toggleIsFetching(false));
        // console.log(response)
        dispatch(updatePost(response.data));
        history.push('/my-posts');
      })

      .catch((e) => {
        console.log('err at update', e);
      });
  };
}
