import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';
import CategoryButton from "../components/CategoryButton";

export default {
  title: 'CategoryButton',
  component: CategoryButton,
};

export const WhatEat = () => <CategoryButton onClick={action('What should I eat? - clicked')}>What should I eat?</CategoryButton>;
export const WhatWatch = () => <CategoryButton onClick={action('What should I watch? - clicked')}>What should I watch?</CategoryButton>;
