import React from 'react';
import { action } from '@storybook/addon-actions';
import SuggestionCard from '../components/SuggestionCard';

const suggestion = {title: "Enchiladas", duration: 90}

export default {
  title: 'SuggestionCard',
  component: SuggestionCard,
};

export const Text = () => <SuggestionCard onClick={action('clicked')} activity={suggestion}>Hello SuggestionCard</SuggestionCard>;