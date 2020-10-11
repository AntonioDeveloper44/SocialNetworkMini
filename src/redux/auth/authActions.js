import axios from 'axios';
import { history } from '../../index';
import { store } from '../../index';
import { toggleModal } from '../common/commonMutations';
import { getCurrentUser, setAuthUser, setToken } from './authMutations';

export function loginUserToServer(values) {
  return (dispatch) =>
    axios
      .post('http://localhost:3001/api/v1/auth', {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        dispatch(setToken(response.data));

        // isLogin = useSelector(state => state.auth.isLogin)
        //if(values.remember) {localStorage.setItem...}
        // я не притягиваю галочку ремембер ми в сторедж, просто если она приходит - засовіваю токен в локал сторедж
        values.remember && localStorage.setItem('token', response.data.token);

        dispatch(toggleModal());
      })
      .then((response) => {
        dispatch(getCurrentUserByToken());
      })
      .catch((e) => {
        console.log('invalid login or password', e);
      });
}

export function setAuthUserToServer(values) {
  return (dispatch) =>
    axios
      .post('http://localhost:3001/api/v1/users', {
        email: values.email,
        password: values.password,
        name: values.name,
      })
      .then(function (response) {
        //был создан как отдельный exp func и принимал в себя response.data
        dispatch(setAuthUser(response.data));
        history.push(`success`);
      })

      .catch((e) => {
        if (e.response.data.error) {
          console.log(e.response.data.error);
        }
        console.log(e.response.data.error[0]);
      });
}

export function getCurrentUserByToken() {
  const config = {
    // headers: {Authorization: `Bearer ${localStorage.getItem('token')}` - не конает, т.к.
    // если не установлена галочка remember me - токен не сохранится в localStorage
    headers: { Authorization: `Bearer ${store.getState().auth.token}` },
    //не вешает вотчер на компонент в отличии от useSelector
  };
  return (dispatch) =>
    axios
      .get('http://localhost:3001/api/v1/auth/user', config)
      .then((response) => {
        dispatch(getCurrentUser(response.data));
      })
      .catch((e) => {
        console.log('oshibka:', e);
      });
}
