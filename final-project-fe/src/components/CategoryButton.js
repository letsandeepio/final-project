import React from 'react';
import { Button } from '@material-ui/core';

export default function CategoryButton(props) {
  return (
    // <Button variant="contained" color="primary">{props.question}</Button>
    <Button variant="contained" color="primary">{props.children}</Button>
  )
}