import React from 'react'
import './styles.scss'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export const NavBar = () => {
    const isLogin = useSelector(state => state.auth.token)
    
    return (
        <nav className="navBar">
            {isLogin &&
            <div className="navBar__item">
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            }

            <div className="navBar__item">
                <NavLink to='/posts'>POSTS</NavLink>
            </div>

            {isLogin &&
            <div className="navBar__item">
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            }

            {isLogin &&
            <div className="navBar__item">
                <NavLink to='/my-posts'>MY POSTS</NavLink>
            </div>
            }

        </nav>
    )
}