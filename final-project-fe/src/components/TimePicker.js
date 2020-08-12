import React, { useState, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import '../index.scss';
import pluralize from 'pluralize';

function CustomTextField(props) {
  return (
    <TextField
      id={props.name}
      label={props.label}
      name={props.name}
      value={props.value}
      onChange={props.handleValueChanged(props.name)}
    />
  );
}

export default function TimePicker({ getTimeAvailableFrom }) {
  const [member, setMember] = useState({
    hours: '',
    minutes: ''
  });

  const handleValueChanged = (name) => (event) => {
    setMember({ ...member, [name]: event.target.value });
  };

  return (
    <div>
      <div className="timePicker">
        <p>Debug</p>
        <form noValidate autoComplete="off" className="time-picker-form">
          <div className="time-picker-text-group">
            <Typography className="time-picker-text">
              I&nbsp;have&nbsp;
            </Typography>
            <CustomTextField
              name="hours"
              label="Hours"
              value={member.hours}
              autoFocus
              handleValueChanged={handleValueChanged}
            />
            <Typography className="time-picker-text">
              {/* {pluralize('hour', hours)} */}
            </Typography>
          </div>
          <div className="time-picker-text-group">
            <Typography className="time-picker-text">
              &#160;and&nbsp;
            </Typography>
            <CustomTextField
              name="minutes"
              label="Minutes"
              value={member.minutes}
              autoFocus
              handleValueChanged={handleValueChanged}
            />
            <Typography className="time-picker-text">
              &nbsp;
              {/*  {pluralize('minute', minutes)} */}
            </Typography>
          </div>
        </form>
      </div>
    </div>
  );
}
