import React from 'react';
import { Button } from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import CategoryButton from "../components/CategoryButton";

export default function CategoryButtonList(props) {

  const categories = props.categories.map(
    category => {
      return (
        <ul>
          <CategoryButton onClick={action(`${category.question} - clicked`)}>{category.question}</CategoryButton>
        </ul>
      )}
  )
  return categories
};