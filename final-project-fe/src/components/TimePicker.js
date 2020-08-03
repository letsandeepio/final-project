import React, { useState, useEffect } from 'react';
import { Typography, TextField, FormControl, Input } from '@material-ui/core';
import "../index.scss"
import pluralize from "pluralize";

export default function TimePicker(props) {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  let hourSelection = pluralize("hour", hours);
  let minuteSelection = pluralize("minute", minutes);

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className = "time-picker-form">
        <Typography variant="h2">I have&nbsp;</Typography>
        {/* <TextField value={hours} onChange={props.onChange} size="2" maxlength="2"/> */}
          <FormControl>
            <Input placeholder={0} value={hours} onChange={e=>setHours(e.target.value)} size="2" maxlength="2"></Input>
          </FormControl>
        <Typography variant="h2">&nbsp;{hourSelection} and&nbsp;</Typography>
        <TextField placeholder={0} value={minutes} onChange={e=>setMinutes(e.target.value)} size="2" maxlength="2"/>
        <Typography variant="h2">&nbsp;{minuteSelection}</Typography>
      </form>
    </div>
  )
}