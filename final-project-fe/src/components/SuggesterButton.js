import React from 'react';
import { Button } from '@material-ui/core';


export default function NavButton(props) {
  return (
  <Button 
    className='suggester-button'
    variant='contained'
    onClick={props.onClick}
    style={props.style}>
      {props.children}
  </Button>
  )
}