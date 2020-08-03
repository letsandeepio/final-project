import React from 'react';
import CategoryPage from '../pages/CategoryPage';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CategoryPage',
  component: CategoryPage,
};

const categoryArray = [
  {question: "what should i do?"},
  {question: "what should i watch?"},
  {question: "where should i eat?"},
  {question: "what should i cook?"},
  {question: "what else could i do?"},
]

export const Default = () => <CategoryPage categories={categoryArray} onChange={action('changed')}/>;