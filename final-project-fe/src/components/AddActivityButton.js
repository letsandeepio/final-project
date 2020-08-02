import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export default function AddActivityButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" onClick={props.onClick} aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}