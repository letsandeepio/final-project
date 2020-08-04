import React, { useState, useEffect } from "react";
import { Typography, TextField } from "@material-ui/core";
import "../index.scss";
import Pluralize from "react-pluralize";
import timeInputFormat from "../helpers/timeInputFormat";

export default function TimePicker(props) {
  // const [hours, setHours] = useState(2);
  // const [minutes, setMinutes] = useState(30);
  const [timeAvailable, setTimeAvailable] = useState({hours: 2, minutes: 30})

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
          onChange={(e)=>handleTimeChange({hours: timeInputFormat(e.target.value), minutes: timeAvailable.minutes})}
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
          // onChange={(e) => setMinutes(timeInputFormat(e.target.value))}
        />
        <Typography variant="h2">
          &nbsp;
          <Pluralize singular={"minute"} count={timeAvailable.minutes} showCount={false} />
        </Typography>
      </form>
    </div>
  );
}
