import React from 'react';
import {Redirect, Route} from "react-router-dom";
//Components
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Posts} from "./components/Posts/Posts";
import {SignUp} from "./components/SignUp/SignUp";
import {SignUpSuccess} from "./components/SignUpSuccess/SignUp";
import {MyPosts} from "./components/MyPosts/MyPosts";
import {Settings} from "./components/Settings/Settings";

//Styles
import 'antd/dist/antd.css';
import './styles.scss'
import {useSelector} from "react-redux";
import ChangePostForm from "./components/ChangePostForm/ChangePostForm";


const App = () => {
    const isLogin = useSelector(state => state.auth.token)
    return (
        <div className="App">
            <Header/>
            <div className="App__wrapper">
                <NavBar/>

                {isLogin && <>
                    <Route path='/profile' render={() => <Profile/>} exact/>
                    <Redirect to="/profile"/>

                </>}

                <Route path='/success' render={() => <SignUpSuccess/>}/>
                <Route path='/posts' render={() => <Posts/>}/>
                <Route path='/signup' render={() => <SignUp/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/my-posts' render={() => <MyPosts/>}/>

                <Route path='/edit-post/:postId(\d+)' render={() => <ChangePostForm/>}/>


            </div>
        </div>
    );
}

export default App
