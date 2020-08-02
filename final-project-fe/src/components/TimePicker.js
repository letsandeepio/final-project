import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import "../index.scss"
import pluralize from "pluralize";

export default function TimePicker(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const hourSelection = pluralize("hour", hours);
  const minuteSelection = pluralize("minute", minutes);

  return (
    <div className="time-picker-container">
      <form noValidate autoComplete="off" className = "time-picker-form">
        <section>I have&nbsp;</section>
        <TextField value={hours} onChange={props.onChange} size="2" maxlength="2"/>
        <section>&nbsp;{hourSelection} and&nbsp;</section>
        <TextField value={minutes} onChange={props.onChange} size="2" maxlength="2"/>
        <section>&nbsp;{minuteSelection}</section>
      </form>
    </div>
  )
}