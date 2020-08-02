import React from 'react';
import { action } from '@storybook/addon-actions';
import SuggesterButtonBox from "../components/SuggesterButtonBox";

export default {
  title: 'SuggesterButtonBox',
  component: SuggesterButtonBox,
};

export const Now = () => <SuggesterButtonBox onClick={action('now-clicked')}/>;
