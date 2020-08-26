import React from "react";


import {Form, Input, Tooltip, Button,} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';

import './styles.scss'
import {useDispatch} from "react-redux";
import {setAuthUserToServer} from "../../redux/auth/authActions";

///////////////////////////////////////////////

export const SignUp = () => {


    const [form] = Form.useForm();
    const dispatch = useDispatch()


    return (
        <div className="signup">
            <Form
                form={form}
                name="register"
                onFinish={values => dispatch(setAuthUserToServer(values))}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                {/*///confirm pass*/}
                {/*<Form.Item*/}
                {/*    name="confirm"*/}
                {/*    label="Confirm Password"*/}
                {/*    dependencies={['password']}*/}
                {/*    hasFeedback*/}
                {/*    rules={[*/}
                {/*        {*/}
                {/*            required: true,*/}
                {/*            message: 'Please confirm your password!',*/}
                {/*        },*/}
                {/*        ({ getFieldValue }) => ({*/}
                {/*            validator(rule, value) {*/}
                {/*                if (!value || getFieldValue('password') === value) {*/}
                {/*                    return Promise.resolve();*/}
                {/*                }*/}
                {/*                return Promise.reject('The two passwords that you entered do not match!');*/}
                {/*            },*/}
                {/*        }),*/}
                {/*    ]}*/}
                {/*>*/}
                {/*    <Input.Password />*/}
                {/*</Form.Item>*/}
                <Form.Item
                    name="nickname"
                    label={
                        <span>
            Nickname&nbsp;
                            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
                    }
                    rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form>
        </div>
    )
}