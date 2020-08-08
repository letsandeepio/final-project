import React from 'react';
import CategoryPage from '../pages/CategoryPage';
import { action } from '@storybook/addon-actions';
import questions from '../constants';

export default {
  title: 'CategoryPage',
  component: CategoryPage,
};

export const Default = () => <CategoryPage categories={questions} onChange={action('changed')}/>;