import React from 'react';
import { Button } from '@material-ui/core';


export default function NavButton(props) {
  return (
  <Button variant="contained" onClick={props.onClick}>{props.children}</Button>
  )
}