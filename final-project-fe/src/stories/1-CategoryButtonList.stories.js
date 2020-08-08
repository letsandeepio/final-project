import React from 'react';
import CategoryButtonList from "../components/CategoryButtonList";
import questions from '../constants';

export default {
  title: 'CategoryButtonList',
  component: CategoryButtonList,
};

export const Default = () => <CategoryButtonList categories={questions} />;