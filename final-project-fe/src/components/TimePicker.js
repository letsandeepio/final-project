import React, { useState, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import "../index.scss"
import Pluralize from "react-pluralize";
import timeInputFormat from '../helpers/timeInputFormat';

export default function TimePicker(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  console.log(hours, minutes);

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className = "time-picker-form">
        <Typography variant="h2">I have&nbsp;</Typography>
        <TextField placeholder={0} value={hours} onChange={e=>setHours(timeInputFormat(e.target.value))} autoFocus/>
        <Typography variant="h2">&nbsp;<Pluralize singular={'hour'} count={hours} showCount={false}/> and&nbsp;</Typography>
        <TextField placeholder={0} value={minutes} onChange={e=>setMinutes(timeInputFormat(e.target.value))} />
        <Typography variant="h2">&nbsp;<Pluralize singular={'minute'} count={minutes} showCount={false}/></Typography>
      </form>
    </div>
  )
}