import React from 'react';
import CategoryButtonList from '../components/CategoryButtonList';
import TimePicker from '../components/TimePicker';
import { Typography } from '@material-ui/core';

export default function CategoryPage(props) {
  

  return (
    <div className="categoryPage">
      <Typography variant="h1">Don't know what to do?</Typography>
      <Typography variant="h2">Just ask!</Typography>
      <TimePicker className="timePicker" onChange={props.onTimeChange} timeAvailable={props.timeAvailable}/>
      <CategoryButtonList className="CategoryButtonList" categories={props.categories} onSelect={props.onSelect}/>
    </div>
  )
}