import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../Post/Post';
import { getPostsById } from '../../redux/posts/postsActions';
import { v4 as uuidv4 } from 'uuid';
/////////////////////////////////////////////////////////////////////
import './styles.scss';
import { Spin } from 'antd';

export const MyPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const userId = useSelector((state) => state.auth.authUser._id);
  const isFetching = useSelector((state) => state.common.isFetching);

  useEffect(() => {
    userId && dispatch(getPostsById(userId));
  }, [dispatch, userId]);

  return (
    <>
      {isFetching ? (
        <Spin />
      ) : (
        <div className="all-posts">
          {posts.map((post) => (
            <Post
              post={post}
              key={uuidv4()}
              title={post.title}
              dateCreated={post.dateCreated}
              _id={post._id}
              postedBy={post.postedBy}
              dispatch={dispatch}
              ifMyPost={userId === post.postedBy}
            />
          ))}
        </div>
      )}
    </>
  );
};
