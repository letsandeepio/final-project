import React from 'react';
import { action } from '@storybook/addon-actions';
import CategoryDropdown from '../components/CategoryDropdown';

export default {
  title: 'CategoryDropdown',
  component: CategoryDropdown,
};

const CategoryButtons = [
  {question: "what should i do?"},
  {question: "what should i watch?"},
  {question: "where should i eat?"},
  {question: "what should i cook?"},
  {question: "what else could i do?"},
]

export const Dropdown = () => <CategoryDropdown questions={CategoryButtons} onChange={action('changed')}/>;