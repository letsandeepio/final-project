import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import hourTimeConvert from "../helpers/hourTimeConvert";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 400,
    width: 400
  },
  title: {
    minSize: '0.1em'
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    maxHeight: 300,
    maxWidth: '100%',
    margin: 'auto',
    display: 'block'
  }
});

export default function SuggestionCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2" className={classes.title}>
        <ReactFitText>
          {props.activity.title}
        </ReactFitText>
      </Typography>
        <Typography color="textSecondary" className={classes.pos}>
        {hourTimeConvert(props.activity.duration)}
        </Typography>
        <img className={classes.img} src={props.activity.image_url ? props.activity.image_url : "https://images.unsplash.com/photo-1544954412-78da2cfa1a0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"}/>
      </CardContent>
    </Card>
  );
}