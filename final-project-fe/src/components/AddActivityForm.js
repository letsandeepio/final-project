import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddActivityForm() {
  const classes = useStyles();

  return (
    <section>
      <TextField id="standard-search" label="Activity Name" type="search" />
      <p>Approximate Duration</p>
      <TextField id="add-activity-hours" label="Hours" type="search" />
      <TextField id="add-activity-minutes" label="Minutes" type="search" />
      <br></br>
      <Button variant="contained" color="primary">
        Save
      </Button>
    </section>
  )
}