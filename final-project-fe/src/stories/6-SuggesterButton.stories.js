import React from 'react';
import { action } from '@storybook/addon-actions';
import SuggesterButton from "../components/SuggesterButton";

export default {
  title: 'SuggesterButton',
  component: SuggesterButton,
};

export const Now = () => <SuggesterButton onClick={action('now-clicked')}>Now</SuggesterButton>;
export const Later = () => <SuggesterButton onClick={action('later-clicked')}>Later</SuggesterButton>;