import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostForm from '../PostForm/PostForm';
import { getCurrentUserByToken } from '../../redux/auth/authActions';

import './styles.scss';

export const Profile = () => {
  const authUser = useSelector((state) => state.auth.authUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserByToken());
  }, [dispatch]);

  return (
    <div className="profile">
      <div className="profile__user">
        <div className="user">
          <div className="user__avatar">
            {authUser.avatar ? authUser.avatar : null}
          </div>
          <div className="user__name">{authUser.email}</div>
        </div>
      </div>
      <PostForm />
    </div>
  );
};
