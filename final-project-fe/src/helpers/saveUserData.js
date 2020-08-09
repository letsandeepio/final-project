import { AUTH_TOKEN, USER_NAME } from '../constants';

const _saveUserData = (token, name) => {
  localStorage.setItem(AUTH_TOKEN, token);
  localStorage.setItem(USER_NAME, name);
};

export default _saveUserData;
