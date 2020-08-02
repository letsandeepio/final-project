import React from 'react';
import { linkTo } from '@storybook/addon-links';
import CategoryButton from "../components/CategoryButton";

export default {
  title: 'CategoryButton',
  component: CategoryButton,
};

// export const WhatEat = () => <CategoryButton question="What should I eat?"/>;
export const WhatEat = () => <CategoryButton>What should I eat?</CategoryButton>;

// export const WhatWatch = () => <CategoryButton question="What should I watch?"/>;