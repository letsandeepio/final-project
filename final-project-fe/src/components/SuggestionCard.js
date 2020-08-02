import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import hourTime from "../helpers/hourTime";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    maxWidth: 280,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SuggestionCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2">
        {props.activity.title}
      </Typography>
        <Typography color="textSecondary" className={classes.pos}>
        {hourTime(props.activity.duration)}
        </Typography>
      </CardContent>
    </Card>
  );
}