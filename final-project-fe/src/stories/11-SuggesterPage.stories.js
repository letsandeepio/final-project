import React from 'react';
import SuggesterPage from '../pages/SuggesterPage';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SuggesterPage',
  component: SuggesterPage,
};

const categoryArray = [
  {question: "what should i do?"},
  {question: "what should i watch?"},
  {question: "where should i eat?"},
  {question: "what should i cook?"},
  {question: "what else could i do?"},
]

export const Default = () => <SuggesterPage categories={categoryArray} onChange={action('changed')}/>;