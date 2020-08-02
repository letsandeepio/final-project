import React from 'react';
import TextField from '@material-ui/core/TextField';
import "../index.scss"


export default function TimePicker(props) {
  return (
    <div className="time-picker-container">
      <form noValidate autoComplete="off" className = "time-picker-form">
        <section>I have&nbsp;&nbsp;</section>
        <TextField value="44" size="2" maxlength="2"/>
        <section>&nbsp;&nbsp;Hours and&nbsp;&nbsp;</section>
        <TextField value="44" size="2" maxlength="2"/>
        <section>&nbsp;&nbsp;Minutes.</section>
      </form>
    </div>
  )
}

//&nbsp