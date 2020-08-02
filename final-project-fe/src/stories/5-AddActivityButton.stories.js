import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { action } from '@storybook/addon-actions';

import AddActivityButton from "../components/AddActivityButton";

export default {
  title: 'AddActivityButton',
  component: AddActivityButton,
};

export const AddActivity = () => <AddActivityButton onClick={action('Add Activity Button Clicked!')}/>;
