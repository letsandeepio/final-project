import React from 'react';
import { action } from '@storybook/addon-actions';
import AddActivityForm from "../components/AddActivityForm";

export default {
  title: 'AddActivityForm',
  component: AddActivityForm,
};

export const AddActivity = () => <AddActivityForm onClick={action('clicked')}></AddActivityForm>;
// export const AddActivity2 = () => <AddActivityForm />;