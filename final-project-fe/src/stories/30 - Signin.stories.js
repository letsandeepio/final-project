import React from 'react';
import { action } from '@storybook/addon-actions';
import Signin from '../components/Signin';

export default {
  title: 'Login Screen',
  component: Signin
};

export const LoginScreen = () => <Signin />;
