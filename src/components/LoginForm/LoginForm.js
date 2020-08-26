import React from "react";

import {useDispatch} from "react-redux";
import {loginUserToServer} from "../../redux/auth/authActions";

import {Form, Input, Button, Checkbox} from 'antd';
import './styles.scss'



export const LoginForm = () => {

    const dispatch = useDispatch()

    // const onFinishFailed = errorInfo => {
    //     console.log('Failed:', errorInfo);
    // };


    return (

        <Form
            name="basic"
            initialValues={{ remember: false}}

            onFinish={ values  => dispatch(loginUserToServer(values)) }
            // onFinishFailed={onFinishFailed}
        >

            <Form.Item
                label="E-mail"
                name="email"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

