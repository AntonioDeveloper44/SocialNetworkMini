import React from 'react'

import {useHistory} from "react-router-dom";
import {toggleModal} from "../../redux/common/commonMutations";
import {logOut} from '../../redux/auth/authMutations'
import {useDispatch, useSelector} from "react-redux";

//styles
import {Button, Modal} from 'antd';
import './styles.scss'
import {LoginForm} from "../LoginForm/LoginForm";

export const Header = () => {
    const dispatch = useDispatch()
    const visible = useSelector(state => state.common.visible)

    //для изменения компонентов в зависимости от условий логинизации - ориентация на ТОКЕН

    const isLogin = useSelector(state => state.auth.token)

    const handleModal = event => {
        event.preventDefault()
        dispatch(toggleModal())
    }

    const handleCancel = e => {
        dispatch(toggleModal())
    };


    const history = useHistory();
    const routeChange = () => {
        let path = `signup`;
        history.push(path);
    }

    const logOutDeleteToken = e => {
        dispatch(logOut())
    }

    return (
        <div className="header">

            Social Network Mini
            <div className="header__auth-block">

                {/* !isLogin - если не логинизирован пользователь , ??- тогда отрисуй  или
                 !isLogin ? <Button> : <Button>
                 */}
                {/*//на что именно проверять, на isLogin , который залетает только в auth reducer в случае SET_TOKEN или отталкиваться от
                самого токена !token && <Button/>
                */}
                {!isLogin && <Button type="primary" onClick={handleModal}> Log In</Button>}
                {!isLogin && <Button onClick={routeChange}>Sign Up</Button>}
                {isLogin &&  <Button onClick={logOutDeleteToken}>Log Out</Button>}


                <Modal
                    title="Log IN"
                    visible={visible}
                    // onOk={this.handleOk}
                    // onOk={console.log('onOk')}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                    ]}
                >
                    <LoginForm/>
                </Modal>
            </div>
        </div>
    )
}