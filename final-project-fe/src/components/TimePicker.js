import React, { useState, useRef, useEffect } from 'react';
import { Typography, TextField } from '@material-ui/core';
import '../index.scss';
import pluralize from 'pluralize';
import timeInputFormat from '../helpers/timeInputFormat';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    cursor: 'none',
    border: 'none',
    visibility: 'none'
  }
}));

export default function TimePicker(props) {
  const classes = useStyles();
  return (
    <div className="timePicker">
      <form
        noValidate
        autoComplete="off"
        className="time-picker-form"
        style={{
          userSelect: 'none'
        }}
      >
        <div className="time-picker-text-group">
          <Typography className="time-picker-text">
            I&nbsp;have&nbsp;
          </Typography>
          <Typography
            className="time-picker-text"
            style={{
              color: '#e91e63',
              fontSize: '3rem',
              margin: 'auto 10px'
            }}
          >
            {props.timeAvailable.hours}
          </Typography>
          <TextField
            className={classes.text}
            value={props.timeAvailable.hours}
            onClick={(e) => e.target.blur()}
            onChange={(e) => {
              if (e.target.value.length <= 2) {
                props.onChange({
                  hours: timeInputFormat(e.target.value, 'hours'),
                  minutes: props.timeAvailable.minutes
                });
              }
            }}
            style={{
              display: 'none'
            }}
          />
          <Typography className="time-picker-text">
            &nbsp;{pluralize('hour', props.timeAvailable.hours)}
          </Typography>
        </div>
        <div className="time-picker-text-group">
          <Typography className="time-picker-text">&#160;and&nbsp;</Typography>
          <Typography
            className="time-picker-text"
            style={{
              color: '#e91e63',
              fontSize: '3rem',
              margin: 'auto 10px'
            }}
          >
            {props.timeAvailable.minutes}
          </Typography>
          <TextField
            value={props.timeAvailable.minutes}
            onClick={(e) => e.target.blur()}
            onChange={(e) => {
              if (e.target.value.length <= 2) {
                props.onChange({
                  hours: props.timeAvailable.hours,
                  minutes: timeInputFormat(e.target.value, 'minutes')
                });
              }
            }}
            style={{
              display: 'none'
            }}
          />
          <Typography className="time-picker-text">
            &nbsp;
            {pluralize('minute', props.timeAvailable.minutes)}
          </Typography>
        </div>
      </form>
    </div>
  );
}
