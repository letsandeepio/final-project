import React, { useState, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import "../index.scss"
import Pluralize from "react-pluralize";

export default function TimePicker(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const updateHours = function(value) {
    let newHour = Number(value);
    
    if (isNaN(newHour)) {
      newHour = value.slice(0, value.length - 1);
    }

    if (value.length > 2) {
      newHour = value.slice(0,2);
    }
    setHours(newHour);
  }
  const updateMinutes = function(value) {
    let newMinutes = Number(value);
    
    if (isNaN(newMinutes)) {
      newMinutes = value.slice(0, value.length - 1);
    }

    if (value.length > 2) {
      newMinutes = value.slice(0,2);
    }
    setMinutes(newMinutes);
  }

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className = "time-picker-form">
        <Typography variant="h2">I have&nbsp;</Typography>
        <TextField placeholder={0} value={hours} onChange={e=>updateHours(e.target.value)} autoFocus/>
        <Typography variant="h2">&nbsp;<Pluralize singular={'hour'} count={hours} showCount={false}/> and&nbsp;</Typography>
        <TextField placeholder={0} value={minutes} onChange={e=>updateMinutes(e.target.value)} />
        <Typography variant="h2">&nbsp;<Pluralize singular={'minute'} count={minutes} showCount={false}/></Typography>
      </form>
    </div>
  )
}