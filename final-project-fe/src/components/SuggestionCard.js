import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import hourTimeConvert from "../helpers/hourTimeConvert";

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
        {hourTimeConvert(props.activity.duration)}
        </Typography>
        <img src={props.activity.image_url}/>
      </CardContent>
    </Card>
  );
}