import React from 'react';
import { linkTo } from '@storybook/addon-links';
import CategoryButtonList from "../components/CategoryButtonList";
import CategoryButton from '../components/CategoryButton';

export default {
  title: 'CategoryButtonList',
  component: CategoryButtonList,
};

const CategoryButtons = [
  {question: "what should i do?"},
  {question: "what should i watch?"},
  {question: "where should i eat?"},
  {question: "what should i cook?"},
  {question: "what else could i do?"},
]

export const Default = () => <CategoryButtonList categories={CategoryButtons} />;