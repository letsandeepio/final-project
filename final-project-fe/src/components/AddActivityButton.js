import React from 'react';
import { Fab } from '@material-ui/core';

export default function CategoryButton(props) {
  return (
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  )
}