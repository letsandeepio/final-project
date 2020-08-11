import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Bounce from 'react-reveal/Bounce';

import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { gql, useQuery } from '@apollo/client';

import moment from 'moment';

const useStyles = makeStyles({
  root: {
    minWidth: 475
  }
});

const ACTIVITY_QUERY = gql`
  query ActivityQuery {
    completeActivities {
      id
      title
      completed_on
      category
    }
  }
`;

export default function Timeline() {
  const { data } = useQuery(ACTIVITY_QUERY);

  const classes = useStyles();
  return (
    <section>
      <div className="homePage move-down8">
        <Typography variant="h2" style={{ color: '#afafaf' }}>
          Your most recent completed activities will appear here!
        </Typography>
        <Typography variant="h1">Timeline</Typography>
        <Bounce bottom cascade>
          <div>
            {data &&
              data.completeActivities.map((item) => {
                return (
                  <Card
                    className={classes.root}
                    key={item.id}
                    style={{
                      margin: '10px'
                    }}
                  >
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {item.category}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {moment(Number(item.completed_on)).fromNow()}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </Bounce>
      </div>
    </section>
  );
}
