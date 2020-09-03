import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import Post from "../Post/Post";
import {getAllPostsOfServer} from "../../redux/posts/postsActions";
import {v4 as uuidv4} from 'uuid';


import {Spin} from "antd";
import './styles.scss'

export const Posts = () => {

    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.common.isFetching);
    const posts = useSelector(state => state.posts.posts)
    const ifMyPost = useSelector(state => state.auth.authUser._id)

    useEffect(() => {
        dispatch(getAllPostsOfServer());
    }, [dispatch]);

    return (
        <>
            {isFetching ? <Spin /> :
            <div className="all-posts">
                {posts.map(post => <Post post={post}
                                         key={uuidv4()}
                                         title={post.title}
                                         dateCreated={post.dateCreated}

                                         _id={post._id}
                                         dispatch={dispatch}
                                         ifMyPost={ifMyPost === post.postedBy}

                />)}
            </div>}
        </>
    )


}


