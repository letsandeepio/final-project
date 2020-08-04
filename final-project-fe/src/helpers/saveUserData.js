import { AUTH_TOKEN } from '../constants';

const _saveUserData = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export default _saveUserData;
