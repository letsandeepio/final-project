import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import "../index.scss"
import pluralize from "pluralize";

export default function TimePicker(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const hourSelection = pluralize("hour", hours);
  const minuteSelection = pluralize("minute", minutes);

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className = "time-picker-form">
        <Typography variant="h2">I have&nbsp;</Typography>
        <TextField value={hours} onChange={props.onChange} size="2" maxlength="2"/>
        <Typography variant="h2">&nbsp;{hourSelection} and&nbsp;</Typography>
        <TextField value={minutes} onChange={props.onChange} size="2" maxlength="2"/>
        <Typography variant="h2">&nbsp;{minuteSelection}</Typography>
      </form>
    </div>
  )
}