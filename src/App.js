import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Components
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { Posts } from './components/Posts/Posts';
import { SignUp } from './components/SignUp/SignUp';
import { SignUpSuccess } from './components/SignUpSuccess/SignUp';
import { MyPosts } from './components/MyPosts/MyPosts';
import { Settings } from './components/Settings/Settings';
import { Users } from './components/Users/Users';
import { ChangePostForm } from './components/ChangePostForm/ChangePostForm';

//Styles
import 'antd/dist/antd.css';
import './styles.scss';
import { useSelector } from 'react-redux';
import { Toasts } from './components/TOASTS/Toasts';

const App = () => {
  const isLogin = useSelector((state) => state.auth.token);

  return (
    <div className="App">
      <Header />
      <div className="App__wrapper">
        <NavBar />
        {!isLogin && <Redirect to="/" />}

        <Route path="/profile" render={() => <Profile />} />
        <Route path="/success" render={() => <SignUpSuccess />} />
        <Route path="/posts" render={() => <Posts />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/my-posts" render={() => <MyPosts />} />
        <Route path="/users/" render={() => <Users />} />
        <Route path="/toasts" render={() => <Toasts />} />

        <Route
          path="/edit-post/:postId"
          render={(props) => <ChangePostForm {...props} />}
        />
      </div>
    </div>
  );
};

export default App;
