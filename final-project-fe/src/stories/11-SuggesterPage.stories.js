import React from 'react';
import SuggesterPage from '../pages/SuggesterPage';
import { action } from '@storybook/addon-actions';
import questions from '../constants';

export default {
  title: 'SuggesterPage',
  component: SuggesterPage,
};

export const Default = () => <SuggesterPage categories={questions} onChange={action('changed')}/>;