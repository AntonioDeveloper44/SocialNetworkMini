import React from 'react';

import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



import './styles.scss'

import {useDispatch} from "react-redux";
import {putUserAvatar} from "../../redux/user/userActions";

export const Settings = () => {


    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const  dispatch = useDispatch()

    const handleSubmit = event => {
        event.preventDefault();

        // const formData = new FormData();
        // formData.append('file', props.file)

        dispatch(putUserAvatar())

    };

    return (
        <div className="settings">
            <div className="settings__change-ava">
            <h2>Change Avatar</h2>
            <Upload {...props}>
                <Button onClick={handleSubmit}>
                    <UploadOutlined /> Click to Upload
                </Button>
            </Upload>
            </div>
        </div>
    )
}