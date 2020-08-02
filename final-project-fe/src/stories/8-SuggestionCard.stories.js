import React from 'react';
import { action } from '@storybook/addon-actions';
import SuggestionCard from '../components/SuggestionCard';

const suggestions = [
  {title: "Enchiladas", duration: 90},
  {title: "Tacos", duration: 20},
  {title: "Grilled Cheese", duration: 15},
  {title: "Chicken Pot Pie", duration: 45},
  {title: "BBQ", duration: 60},
]

export default {
  title: 'SuggestionCard',
  component: SuggestionCard,
};

export const Text = () => <SuggestionCard onClick={action('clicked')}>Hello SuggestionCard</SuggestionCard>;