import React from 'react';
import { Button } from '@material-ui/core';

export default function NavButton(props) {
  return (
    <Button variant="contained" size="large" color="primary" onClick={props.onClick}>
        {props.children}
    </Button>
  )
}