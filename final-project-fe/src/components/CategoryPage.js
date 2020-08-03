import React from 'react';
import CategoryButtonList from './CategoryButtonList';
import TimePicker from './TimePicker';

export default function CategoryPage(props) {
  return (
    <>
      <TimePicker categories={props.categories}/>
      <CategoryButtonList/>
    </>
  )
}