import React from 'react';
import { action } from '@storybook/addon-actions';
import AddActivityForm from "../components/AddActivityForm";

export default {
  title: 'AddActivityForm',
  component: AddActivityForm,
};

const CategoryButtons = [
  {question: "what should i do?"},
  {question: "what should i watch?"},
  {question: "where should i eat?"},
  {question: "what should i cook?"},
  {question: "what else could i do?"},
]

export const AddActivity = () => <AddActivityForm questions={CategoryButtons} onChange={action('changed')} onClick={action('clicked')}></AddActivityForm>;