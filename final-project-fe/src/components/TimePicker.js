import React, { useState, useRef, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import '../index.scss';
import pluralize from 'pluralize';
import timeInputFormat from '../helpers/timeInputFormat';

export default function TimePicker({hours, minutes, setTimeAvailable}) {

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className="time-picker-form">
        <div className="time-picker-text-group">
          <Typography className="time-picker-text">I&nbsp;have&nbsp;</Typography>
          <TextField
            value={hours}
            // onClick={e=>e.target.select()}
            onChange={
              (e) => {
                  setTimeAvailable((prev)=> {
                    return {
                    ...prev, hours: e.target.value
                    }
                  })
              }
            }
          />
          <Typography className="time-picker-text">
            {pluralize('hour', hours)}
          </Typography>
        </div>
        <div className="time-picker-text-group">
          <Typography className="time-picker-text">&#160;and&nbsp;</Typography>
          <TextField
            value={minutes}
            // onClick={e=>e.target.select()}
            onChange={
              (e) => {
                  setTimeAvailable((prev)=> {
                    return {
                    ...prev, minutes: e.target.value
                    }
                  })
              }
            }
            // if (e.target.value.length <= 2) {
          />
          <Typography className="time-picker-text">
            &nbsp;
            {pluralize('minute', minutes)}
          </Typography>
        </div>
      </form>
    </div>
  );
}
