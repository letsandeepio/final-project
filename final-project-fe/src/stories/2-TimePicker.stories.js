import React from 'react';
import { action } from '@storybook/addon-actions';
import TimePicker from '../components/TimePicker';
import "../index.scss"


export default {
  title: 'TimePicker',
  component: TimePicker
};

export const Empty = () => <TimePicker/>;