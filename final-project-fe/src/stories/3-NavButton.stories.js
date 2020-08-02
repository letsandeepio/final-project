import React from 'react';
import { action } from '@storybook/addon-actions';
import NavButton from '../components/NavButton';
import "../index.scss"

export default {
  title: 'NavButton',
  component: NavButton,
};

export const Default = () => <NavButton onClick={action('nav-button = clicked')}>Login</NavButton>;