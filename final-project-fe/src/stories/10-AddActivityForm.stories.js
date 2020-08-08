import React from 'react';
import { action } from '@storybook/addon-actions';
import AddActivityForm from "../components/AddActivityForm";
import questions from '../constants';

export default {
  title: 'AddActivityForm',
  component: AddActivityForm,
};

export const AddActivity = () => <AddActivityForm questions={questions} onChange={action('changed')} onClick={action('clicked')}></AddActivityForm>;