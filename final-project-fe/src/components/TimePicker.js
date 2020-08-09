import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import '../index.scss';
import pluralize from 'pluralize';
import timeInputFormat from '../helpers/timeInputFormat';

export default function TimePicker(props) {
  const [timeAvailable, setTimeAvailable] = useState(props.timeAvailable);

  const handleTimeChange = function (value) {
    setTimeAvailable(prev=>({...prev, ...value}));
    props.onChange(value);
  };

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className="time-picker-form" key={0}>
        <div class="time-picker-text-group">
          <Typography class="time-picker-text">I&nbsp;have&nbsp;</Typography>
          <TextField
            value={timeAvailable.hours}
            onClick={e=>e.target.select()}
            onChange={(e) =>
              handleTimeChange({
                hours: timeInputFormat(e.target.value, 'hours'),
                minutes: timeAvailable.minutes
              })
            }
            key={1}
          />
          <Typography class="time-picker-text">
            {pluralize('hour', timeAvailable.hours)}
          </Typography>
        </div>
        <div class="time-picker-text-group">
          <Typography class="time-picker-text">&#160;and&nbsp;</Typography>
          <TextField
            value={timeAvailable.minutes}
            onClick={e=>e.target.select()}
            onChange={(e) =>
              handleTimeChange({
                hours: timeAvailable.hours,
                minutes: timeInputFormat(e.target.value, 'minutes')
              })
            }
            key={2}
          />
          <Typography class="time-picker-text">
            &nbsp;
            {pluralize('minute', timeAvailable.minutes)}
          </Typography>
        </div>
      </form>
    </div>
  );
}
