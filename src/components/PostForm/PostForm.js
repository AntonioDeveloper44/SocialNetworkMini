import React from "react";
import {useDispatch} from "react-redux";
import {setPostToServer} from "../../redux/posts/postsActions";
import {  Form, Input, Button, } from 'antd';
import './syles.scss'

const PostForm = () => {

    const dispatch = useDispatch()

    return (
        <div className="form">
            <Form
                name="createPost"
                onFinish={ values  => dispatch(setPostToServer(values)) }
                // onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="postTitle"
                    name="post title"
                    rules={[{ required: true, message: 'Post must have a title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="postContent"
                    name="post content"
                    rules={[{ required: true, message: 'post cant be empty..' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default PostForm