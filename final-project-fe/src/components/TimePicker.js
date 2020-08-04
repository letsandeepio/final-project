import React, { useState, useEffect } from "react";
import { Typography, TextField } from "@material-ui/core";
import "../index.scss";
import Pluralize from "react-pluralize";
import timeInputFormat from "../helpers/timeInputFormat";

export default function TimePicker(props) {
  const [timeAvailable, setTimeAvailable] = useState(props.timeAvailable)

  const handleTimeChange = function(value) {
    setTimeAvailable(value);
    props.onChange(value);
  }

  return (
    <div className="timePicker">
      <form noValidate autoComplete="off" className="time-picker-form">
        <Typography variant="h2">I have&nbsp;</Typography>
        <TextField
          placeholder={0}
          value={timeAvailable.hours}
          onChange={(e)=>handleTimeChange({hours: timeInputFormat(e.target.value, 'hours'), minutes: timeAvailable.minutes})}
          autoFocus
        />
        <Typography variant="h2">
          &nbsp;
          <Pluralize singular={"hour"} count={timeAvailable.hours} showCount={false} />{" "}
          and&nbsp;
        </Typography>
        <TextField
          placeholder={0}
          value={timeAvailable.minutes}
          onChange={(e)=>handleTimeChange({hours: timeAvailable.hours, minutes: timeInputFormat(e.target.value, 'minutes')})}
        />
        <Typography variant="h2">
          &nbsp;
          <Pluralize singular={"minute"} count={timeAvailable.minutes} showCount={false} />
        </Typography>
      </form>
    </div>
  );
}
