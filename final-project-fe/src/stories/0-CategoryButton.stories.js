import React from 'react';
import { linkTo } from '@storybook/addon-links';
import CategoryButton from "../components/CategoryButton";

export default {
  title: 'CategoryButton',
  component: CategoryButton,
};

export const Default = () => <CategoryButton question="What should I eat?"/>;
export const Second = () => <CategoryButton question="What should I eat?"/>;

// Unknown boilerplate code:
// CategoryButton.story = {
//   name: 'CategoryButton',
// };
