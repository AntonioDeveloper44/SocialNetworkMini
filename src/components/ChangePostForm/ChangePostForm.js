import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { updatePostById} from "../../redux/posts/postsActions";
import {  Form, Input, Button, } from 'antd';
import './syles.scss'



const ChangePostForm = (postId) => {

    // const post = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()

    return (
        <div className="form">
            <Form
                name="createPost"
                onFinish={ values  => dispatch(updatePostById(postId , values)) }
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="postTitle"
                    //name - то что нужно для дот нотєйшен, эти свойства полетят на сервер
                    name="title"
                    rules={[{ required: true, message: 'Post must have a title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="20 letters min text"
                    name="fullText"
                    rules={[{ required: true, message: 'post cant be empty..' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default ChangePostForm