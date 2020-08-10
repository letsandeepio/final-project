import React, { useState, useRef, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import '../index.scss';
import pluralize from 'pluralize';
import timeInputFormat from '../helpers/timeInputFormat';

export default function TimePicker(props) {

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className="time-picker-form">
        <div class="time-picker-text-group">
          <Typography class="time-picker-text">I&nbsp;have&nbsp;</Typography>
          <TextField
            value={props.timeAvailable.hours}
            onClick={e=>e.target.select()}
            onChange={(e) =>
              props.onChange({
                hours: timeInputFormat(e.target.value, 'hours'),
                minutes: props.timeAvailable.minutes
              })
            }
          />
          <Typography class="time-picker-text">
            {pluralize('hour', props.timeAvailable.hours)}
          </Typography>
        </div>
        <div class="time-picker-text-group">
          <Typography class="time-picker-text">&#160;and&nbsp;</Typography>
          <TextField
            value={props.timeAvailable.minutes}
            onClick={e=>e.target.select()}
            onChange={(e) =>
              props.onChange({
                hours: props.timeAvailable.hours,
                minutes: timeInputFormat(e.target.value, 'minutes')
              })
            }
            // onBlur={}
          />
          <Typography class="time-picker-text">
            &nbsp;
            {pluralize('minute', props.timeAvailable.minutes)}
          </Typography>
        </div>
      </form>
    </div>
  );
}
