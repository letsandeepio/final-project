import React from 'react';
import { Typography } from '@material-ui/core';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function CategoryPage(props) {
  return (
    <section className="move-down">
      {/* <div className="homePage center-text"> */}
        <div className="top-text homePage">
          <Typography variant="h3">don't know what to do?</Typography>
          <Typography variant="h1">we can help!</Typography>
          <Button variant="contained" size="large" color="primary" component={Link} to="/categories" >
            get started!
          </Button>
        </div>
      {/* </div> */}
    </section>
  )
}