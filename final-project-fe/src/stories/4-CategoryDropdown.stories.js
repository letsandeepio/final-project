import React from 'react';
import { action } from '@storybook/addon-actions';
import questions from '../constants';

export default {
  title: 'CategoryDropdown',
  component: CategoryDropdown,
};

export const Dropdown = () => <CategoryDropdown questions={questions} onChange={action('changed')}/>;