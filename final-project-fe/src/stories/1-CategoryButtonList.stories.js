import React from 'react';
import { linkTo } from '@storybook/addon-links';
import CategoryButtonList from "../components/CategoryButtonList";
import CategoryButton from '../components/CategoryButton';

export default {
  title: 'CategoryButtonList',
  component: CategoryButtonList,
};

const CategoryButtons = [
  {question: "what should i do?"}
]

export const Default = () => <CategoryButtonList categories={CategoryButtons} />;
// export const Second = () => <CategoryButton question="What should I eat?"/>;

// Unknown boilerplate code:
// CategoryButton.story = {
//   name: 'CategoryButton',
// };
