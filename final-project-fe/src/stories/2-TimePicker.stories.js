import React from 'react';
import { action } from '@storybook/addon-actions';
import TimePicker from '../components/TimePicker';


export default {
  title: 'TimePicker',
  component: TimePicker
};

export const Empty = () => <TimePicker>Hello Button</TimePicker>;