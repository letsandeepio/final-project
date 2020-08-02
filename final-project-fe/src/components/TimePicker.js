import React from 'react';
import TextField from '@material-ui/core/TextField';
import 
import "../index.scss"


export default function TimePicker(props) {
  return (
    <div className="time-picker-container">
      <form noValidate autoComplete="off" className = "time-picker-form">
        <section>I have&nbsp;</section>
        <TextField value="2" onChange={props.onChange} size="2" maxlength="2"/>
        <section>&nbsp;hours and&nbsp;</section>
        <TextField value="30" onChange={props.onChange} size="2" maxlength="2"/>
        <section>&nbsp;minutes</section>
      </form>
    </div>
  )
}

//&nbsp