import React, { useState } from 'react';
import CategoryButtonList from '../components/CategoryButtonList';
import TimePicker from '../components/TimePicker';
import AddActivityButton from '../components/AddActivityButton';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function CategoryPage(props) {
  const [timeAvailable, setTimeAvailable] = useState(props.timeAvailable)

  return (
    <>
      <div className="categoryPage">
        <Typography className="top-text" variant="h3">
          Don't know what to do?
        </Typography>
        <Typography variant="h1">Just ask!</Typography>
        <TimePicker className="timePicker" onChange={setTimeAvailable} timeAvailable={timeAvailable}/>
        <CategoryButtonList className="CategoryButtonList" categories={props.categories} onSelect={(category)=>props.onSelect(category, timeAvailable)}/>
        <div className='spacer' ></div>
      </div>
        <AddActivityButton className="addActivityButton" component={Link} to="/add-activity"></AddActivityButton>
    </>
  )
}
