import React from 'react';
import { action } from '@storybook/addon-actions';
import GeneralBigButton from "../components/GeneralBigButton";



export default {
  title: 'GeneralBigButton',
  component: GeneralBigButton,
};

export const GetStarted = () => <GeneralBigButton onClick={action('clicked')}>Get started!</GeneralBigButton>;
export const BackToHome = () => <GeneralBigButton onClick={action('clicked')}>Back To Home</GeneralBigButton>;