import React from 'react';
import { Button } from '@material-ui/core';
import CategoryButton from "../components/CategoryButton";

export default function CategoryButtonList(props) {

  const categories = props.categories.map(
    category => {
      return (
        <ul>
          <CategoryButton>{category.question}</CategoryButton>
        </ul>
      )}
  )
  return categories
};