import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Post from "../Post/Post";
import { getPostsById} from "../../redux/posts/postsActions";

import { v4 as uuidv4 } from 'uuid';


import './styles.scss'



export const MyPosts = () => {



    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const ifMyPost = useSelector(state => state.auth.authUser._id)

    useEffect(() => {
        dispatch(getPostsById());

    }, [dispatch]);


    if (!posts.length) {
        return <p className="text-center">Постов пока нет</p>
    }

    return (
        <div className="all-posts">
            {posts.map(post => <Post
                                     post={post}
                                     key={uuidv4()}
                                     title={post.title}
                                     dateCreated={post.dateCreated}

                                     _id={post._id}
                                     postedBy={post.postedBy}
                                     dispatch={dispatch}
                                     ifMyPost={ifMyPost === post.postedBy}
            />)}
        </div>
    )


}

