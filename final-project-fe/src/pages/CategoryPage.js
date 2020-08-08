import React from 'react';
import CategoryButtonList from '../components/CategoryButtonList';
import TimePicker from '../components/TimePicker';
import AddActivityButton from '../components/AddActivityButton';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function CategoryPage(props) {
  return (
    <>
      <div className="categoryPage">
        <Typography class="top-text" variant="h3">
          Don't know what to do?
        </Typography>
        <Typography variant="h1">Just ask!</Typography>
        <TimePicker className="timePicker" onChange={props.onTimeChange} timeAvailable={props.timeAvailable}/>
        <CategoryButtonList className="CategoryButtonList" categories={props.categories} onSelect={props.onSelect}/>
      </div>
        <AddActivityButton className="addActivityButton" component={Link} to="/add-activity"></AddActivityButton>
    </>
  )
}
