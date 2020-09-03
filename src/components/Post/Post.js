import React from "react";
import moment from "moment";
import {Button} from "antd";

import {deletePostById} from "../../redux/posts/postsActions";
import {useHistory} from "react-router-dom";

export default ({post , dispatch , ifMyPost }) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p>{post.fullText}</p>
                <span>{moment(post.dateCreated).format('DD/MM/YYYY')}</span>
                {/*<span>{post.postedBy}</span>*/}
                {/*(post._id) - то, что принимает в себя функия,при использовании в другом месте (не здесь, а в акшєнах) можно называть как угодно*/}

                <div className="post-button">
                {ifMyPost && <Button type="primary" danger key={post._id} onClick={() => dispatch(deletePostById(post._id))}>Delete</Button>}
                {/*onClick должен вызвать скрытую форму или модалку, в которой будут values отправляться в updatePostById*/}
                {ifMyPost && <Button
                    type="secondary"
                    onClick={() => history.push(`edit-post/${post._id}`)}
                >
                    Edit
                </Button>}
                {/*    dispatch(updatePostById(post._id , values))*/}
                </div>

            </div>
        </div>
    )
}